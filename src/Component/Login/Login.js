import React from 'react';
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    return <Container>
        <Row>
            <Col >
                <form style={{ marginTop: '150px' }}>
                    <h2>Login</h2>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                                name="email"
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input
                                type="password"
                                class="form-control"
                                id="inputPassword3"
                                name="password"

                            />
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary">Sign in</button>
                    <br /><br />
                    <NavLink as={Link} to="/register">
                        <Button >please register</Button>

                    </NavLink>



                </form>
                <p>------------------</p>
                <Button >Google sing in</Button>


            </Col>
            <Col>
            <img src="" alt="" />
            </Col>
        </Row>
    </Container>;
}

export default Login;
