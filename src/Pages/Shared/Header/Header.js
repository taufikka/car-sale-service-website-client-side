import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logout } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bolder'>CarWorld</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink activeStyle={activeStyle} className='nav' to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className='nav' to="/explore">Explore</NavLink>

                        {
                            user.email ? <NavLink to="/"><button onClick={logout} className="btn btn-danger">Log out</button></NavLink>
                                :
                                <NavLink activeStyle={activeStyle} className='nav' to="/login">Login</NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;