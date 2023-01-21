import React from 'react'
import { Button, Col, FloatingLabel, Form, Image } from 'react-bootstrap'
import { ImFacebook2 } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Col className='col-12 d-flex flex-column flex-lg-row' style={{ height: "calc(100vh - 72px)" }}>
            <Col className='pt-5 col-12 col-lg-7 h-100' style={{ backgroundImage: "url(images/vv5.jpg)", backgroundPositionX: "center", backgroundSize: "auto 100%", backgroundRepeat: "no-repeat" }}>
                <Col className='pt-1 ms-4 ms-lg-5 mt-3 border-3 border-start border-light fs-6 fs-4 banner-caps'>
                    <Col className='px-2 text-light'>შეცვალე სამყარო უკეთესობისკენ</Col>
                    <Col className='px-2 text-light'>გახდი მოხალისე</Col>
                </Col>
                <Col className='mx-auto mx-md-0 ms-md-auto d-flex justify-content-center justify-content-lg-end mt-4 mt-md-4 me-md-4 col-10 col-md-6'>
                    <Image src='images/img.jpg' className='rounded-4 w-100' />
                </Col>
                <Col className='d-flex d-lg-none justify-content-center mt-4'>
                    <a href="#vote" className='text-white'><IoIosArrowDown style={{ fontSize: "5rem" }} /></a>
                </Col>
            </Col>
            <Col className='col-12 col-lg p-2 bg-dark' id='vote'>
                <Col className='banner-caps mt-2 ms-2'>
                    <h5 className='fs-3 text-white text-center'>სულ მიცემული ხმა: <span className='text-success'>136</span></h5>
                </Col>
                <Col className='banner-caps mt-5 ms-2'>
                    <h5 className='fs-5 text-white text-center'>ხმის მისაცემად გამოიყენეთ ფეისბუქის ავტორიზაცია</h5>
                </Col>
                <Col className='col-10 mx-auto bg-secondary mt-3 mb-4 mb-lg-0 px-3 py-3 rounded-3'>
                    <Col className='col-12 fs-1 d-flex alignitems-center'>
                        <ImFacebook2 />
                    </Col>
                    <Col className='mt-3 banner-caps'>
                        <Col className='col-12 col-lg-8 mx-auto'>
                            <Form.Control type='email' size='lg' placeholder='ელ-ფოსტა' className='rounded-1 shadow-none' />
                        </Col>
                        <Col className='col-12 col-lg-8 mx-auto mt-2'>
                            <Form.Control type='password' size='lg' placeholder='პაროლი' className='rounded-1 shadow-none' />
                        </Col>
                        <Col className='col-12 col-lg-8 mx-auto mt-2'>
                            <Button className='btn-lg col-12 bg-success border-0 rounded-1'>ხმის მიცემა</Button>
                        </Col>
                    </Col>
                </Col>
            </Col>
        </Col>
    )
}

export default Home