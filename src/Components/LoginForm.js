import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <Container>
            <form onSubmit={submitHandler}>
                <div className="p-3 mb-2 bg-light text-dark">

                    <h1 className="text-success">WATCH MOVIES, SERIES AND MORE...</h1>
                    <h2 className="text-warning">Login</h2>

                    {/******Name******/}
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                        <Form.Text className="text-muted">
                            Only your first and last name
                        </Form.Text>
                    </Form.Group>
                    {/* /***********  */}

                    {/*********Email********/}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {/*************** *****/}

                    {/********Password*******/}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </Form.Group>
                    {/**********************/}

                    {/*ERROR */}
                    {(error !== "") ? (<p class="text-danger my-3">{error}</p>) : ""}

                    <Button variant="primary" type="submit">
                        Login
                </Button>

                </div>
            </form>
        </Container>
    )
}

export default LoginForm;

