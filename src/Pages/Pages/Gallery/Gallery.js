import React from 'react';
import Classroom from './Classroom/Classroom';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <h1>Some picture of us</h1>
            <h2>Classroom</h2>
            <hr />
            <Classroom></Classroom>
        </div>
    );
};

export default Gallery;