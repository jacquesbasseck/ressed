import React from 'react';

import { Container, Row } from 'react-bootstrap';
import Header from './Header';

const Layout = ({children}) => {


    return (
        <Container fluid="md">
            <Header />
            <Row>
                { children }
            </Row>
        </Container>
    )
}


export default Layout