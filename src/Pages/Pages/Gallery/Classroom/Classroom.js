import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Classroom = () => {
    const [classroom, setClassroom] = useState([]);

    useEffect(() => {
        fetch('./galleries.json')
        .then(res => res.json())
        .then(data => setClassroom(data))
    }, [])
    return (
        <Container>
            <Row>
            {
                    classroom.slice(0,6).map(classimg => <Col xs={12} md={4}>
                        <img style={{'width': '100%','padding': '0px', 'marginBottom': '20px'}} src={classimg.img} alt="" />
                    </Col>)
                }
            </Row>
            <h2>FESTIVALS</h2>
            <hr />
            <Row>
            {
                    classroom.slice(6,11).map(classimg => <Col xs={12} md={4}>
                        <img style={{'width': '100%','padding': '0px', 'marginBottom': '20px'}} src={classimg.img} alt="" />
                    </Col>)
                }
            </Row>
            <h2>AUDITORIAM</h2>
            <hr />
            <Row>
            {
                    classroom.slice(11,20).map(classimg => <Col xs={12} md={4}>
                        <img style={{'width': '100%','padding': '0px', 'marginBottom': '20px'}} src={classimg.img} alt="" />
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Classroom;