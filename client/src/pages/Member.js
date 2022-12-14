import React, { useState, useEffect, useContext } from 'react';
import { Container, 
    Form, 
    Row, 
    Col, 
    Button,
    } from "react-bootstrap";
import { API } from '../config/api';
import { UserContext } from '../context/userContext';
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from 'react-query';
import logo from "../assets/images/Logo.png"

export default function AddMember() {
const title = "Add Member";
document.title = "Talenta Indonesia | " + title;

let navigate = useNavigate();

const handleChange = (e) => {
    setForm({
    ...form,
    [e.target.name]: e.target.value,
    });
};

    const [form, setForm] = useState({
        name: '',
        gender: '',
        age: '',
    
    }); 


    const handleSubmit = useMutation(async (e) => {
        try {
        e.preventDefault();

        const config = {
            headers: {
            'Content-type': 'application/json',
            },
        };

        const response = await API.post('/member', form, config);
        console.log(response.data?.data?.createdData);

        navigate('/landing');
        } catch (error) {
        console.log(error);
        }
    });

return (
    <>
    <div className='p-member'>
    <Container className=" py-5" >
        <Row>
            <Col className='d-flex'>
            <Col>
                <Col xs="12">
                    <img className='img-logo' src={logo}/>
                    <div className="text-header-profile">Add Member</div>
                </Col>
                <Col xs="7">
                    <form form onSubmit={(e) => handleSubmit.mutate(e)}>
                    <Form.Group className="input-editC" controlId="formGroupName">
                        <Form.Control 
                        type="text"  
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                        style={{
                            background:"white",
                            marginTop:"20px",
                            color: "white"}} 
                        />
                        <Form.Control 
                        type="text"  
                        placeholder="Gender"
                        name="gender"
                        onChange={handleChange}
                        style={{
                            background:"white",
                            marginTop:"20px",
                            color: "white"}} 
                        />
                        <Form.Control 
                        type="number"  
                        placeholder="Age"
                        name="age"
                        onChange={handleChange}
                        style={{
                            background:"white",
                            marginTop:"20px",
                            color: "white"}} 
                        />
                        <div className="d-grid gap-2 mt-4">
                            <Button 
                            type="submit" className="btn-addproduct">
                            Add Member
                            </Button>
                        </div>
                    </Form.Group>
                    </form>
                    </Col>
                </Col>
            </Col>
            </Row>
        </Container>
    </div>
    </>
    );
}
