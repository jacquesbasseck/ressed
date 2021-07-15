import React from 'react';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';
import Logo from '../templates/Logo';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';


const Header = () => {

    const Title = styled.h1`
        color: red;
        font-size: 1.8vw;
        text-align: justify;
        font-weight: 150;
    `
    const SocialLinkCol = styled(Col)`
        font-size: 1.3vw;
        text-align: right;
    `
    const HeaderMidlle = styled(Col)`
        padding: 0 4vw;
        text-align: justify;
    `
    const Pub = styled(Col)`
        min-height: 10vh;
        padding: 10px;
        text-align: center;
        line-height: 4px;
        background-color: #D9F3FE;
        border: 1px solid rgba(28,110,164,0.21);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    `
    const LogoCol = styled(Col)`
        padding-top: 0px;

    `
    const ContainerHeader = styled(Container)`
        padding-top: 10px;

    `


    return (
        <ContainerHeader fluid>
            <Row>
                <LogoCol md="auto">
                    <Logo />
                </LogoCol>

                <HeaderMidlle>
                    <Row>
                        <SocialLinkCol>
                            <FaFacebookSquare />
                            <FaTwitterSquare />
                            <FaLinkedin />
                        </SocialLinkCol>
                    </Row>
                    <Row>
                        <Col><Title>Ressed, la lumière du Sénégal de demain.</Title></Col>
                    </Row>
                    <Row>
                        <Pub>
                            <p>Bande passant publicitaire:</p>
                            <p>Séminaire pour la formation génomique bactérienne du 16 au 30 juin 2021</p>
                        </Pub>
                    </Row>
                </HeaderMidlle>

                <LogoCol md="auto">
                    <Logo />
                </LogoCol>
            </Row>


            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Accueil</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">À propos</Nav.Link>
                        <Nav.Link href="#features">Membres</Nav.Link>
                        <Nav.Link href="#pricing">Sciences & Éducation</Nav.Link>
                        <Nav.Link href="#pricing">Actualités</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </ContainerHeader>
    );
}

export default Header
