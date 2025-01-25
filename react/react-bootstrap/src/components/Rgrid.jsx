import React from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

const Rgrid = () => {
    return <>
        <Container>
            <Row>
                <Col lg={8} md={4} sm={12}> <Alert>primary</Alert> </Col>
                <Col lg={4} md={8} sm={12}> <Alert variant='danger'>danger</Alert> </Col>
            </Row>

            <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header className='bg-danger p-5'>Login</Card.Header>
                        <Card.Body>test</Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    </>
}

export default Rgrid