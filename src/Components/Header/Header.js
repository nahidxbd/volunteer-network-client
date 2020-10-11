import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import './Header.css';


const Header = () => {

    return (
        <div className="header">

            <Container>
                <Navbar>
                    <Link to="/">
                        <img style={{ width: '200px' }} src={logo} alt="logo" />
                    </Link>
                    <Nav className="ml-auto">
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'>Home</Link>
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'>Donation</Link>
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'>Events</Link>
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'>Blog</Link>
                        <Link to="/" >
                            <Button className="link register-btn ml-5" variant="contained"> Register</Button>
                        </Link>
                        <Link to="/" >
                            <Button className="link admin-btn ml-5" variant="contained"> Admin</Button>
                        </Link>

                    </Nav>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;