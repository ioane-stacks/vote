import React from 'react'
import { Image, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand="lg" className='ps-1 pe-3 px-sm-5 py-3' sticky="top" style={{ zIndex: 1 }}>
            <Navbar.Brand>
                <Image src='/images/logo-new.png' alt='no image' width="85" className='position-absolute border border-3 border-dark rounded-2 shadow-sm' style={{ top: 10, cursor: "pointer" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='shadow-none' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mx-auto alk-rex'>
                    <Nav.Link href='#1' className='mx-auto'>იდეა</Nav.Link>
                    <Nav.Link href='#2' className='mx-auto'>შესახებ</Nav.Link>
                    <Nav.Link href='#3' className='mx-auto'>კონტაქტი</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header