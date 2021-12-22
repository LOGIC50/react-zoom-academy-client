import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('./instructors.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
    }, []);

    return (
        <Container style={{margin: '50px auto'}}>
            <Row>
                {
                    instructors.map(instructor => <Instructor
                    instructor={instructor}
                    ></Instructor>)
                }
            </Row>
        </Container>
    );
};

export default Instructors;