import React from 'react'
import { Container, Form } from 'react-bootstrap'

const Rform = () => {
    return <>
        <Container>
            <Form.Control />
            <Form.Control type='number' />
            <Form.Control as="textarea" />
            <Form.Select>
                <option value="">Choose city</option>
                <option value="">new york</option>
                <option value="">london</option>
                <option value="">berlin</option>
            </Form.Select>
            <hr />
            <Form.Check name="gender" type='radio' label="male" />
            <Form.Check name="gender" type='radio' label="female" />

            <Form.Check name="gender" label="html" />
            <Form.Check name="gender" label="css" />

        </Container>
    </>
}

export default Rform