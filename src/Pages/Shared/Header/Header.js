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
    console.log(user.displayName)
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bolder'>CarWorld</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/explore">Explore</NavLink>
                        {
                            user?.email ? <div>
                                <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/dashboard">Dashboard</NavLink>

                                <NavLink to="/"><button onClick={logout} className="btn btn-danger mx-2">Log out</button></NavLink>
                            </div>
                                :
                                <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/login">Login</NavLink>
                        }
                        <Navbar.Text>
                            logged in as: <small className='fw-bold text-dark'>{user?.displayName}</small>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;