import React from 'react'
import Logo from "./../../../images/logopitcch.jpg";
// import Logo from "./../../../images/logo_whats.jpeg";
import styles from './styles.css'
import Match1 from "./../../../images/match1.jpg";
import Match2 from "./../../../images/match2.jpg";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBContainer,
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

function TelaHome() {
    return (
        <div>
            <div id='back'>
                <img src={Logo} id="imgHome" />
                <div id='btn-conta'>
                    <button type="button" class="btn btn-secondary btn-sm" id='btnCad'>Criar uma conta</button>
                </div>
                <div id='imgs'>
                    <div id='M1' >
                        <img src={Match1} id="imgMatch1" />
                        <div id='M1Card' >
                            <MDBCard shadow='0' border='gray' background='white'>
                                <MDBCardBody className='text-dark'>
                                    <MDBCardTitle font-Size='50px' >What is Lorem Ipsum?</MDBCardTitle>
                                    <MDBCardText>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                    <div id='M2' >
                        <img src={Match2} id="imgMatch2" />
                        <div id='M2Card' >
                            <MDBCard shadow='0' border='gray' background='white'>
                                <MDBCardBody className='text-dark'>
                                    <MDBCardTitle>What is Lorem Ipsum?</MDBCardTitle>
                                    <MDBCardText>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                </div>
            </div>
            <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
                <MDBContainer className='p-4'>
                    <section className='mb-4'>
                        <div id='redes' >
                        <MDBBtn outline color="light"  floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='facebook-f'  />
                            
                        </MDBBtn>
                    
                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </div>
                    </section>
                    <section className=''>
                        <form action=''>
                            <MDBRow className='d-flex justify-content-center'>
                                <MDBCol size="auto">
                                    <p className='pt-2'>
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </MDBCol>

                                <MDBCol md='5' start='12'>
                                    <MDBInput contrast type='email' label='' />
                                </MDBCol>

                                <MDBCol size="auto">
                                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                                        Subscribe
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </section>
                </MDBContainer>
                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    New York, NY 10012, US
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2022 Copyright: 
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                         Assert.AI.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    );

}

export default TelaHome;