import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const Roffcanavas = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button onClick={e => setShow(true)}>open</Button>

        <Offcanvas show={show} onHide={e => setShow(false)}>
            <Offcanvas.Header closeButton>header</Offcanvas.Header>
            <Offcanvas.Body>body</Offcanvas.Body>
        </Offcanvas>
    </>
}

export default Roffcanavas