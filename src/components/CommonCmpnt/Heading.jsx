import React from 'react';

const Heading = ({title}) => {
    return (
        <h1 className='text-4xl font-light g-color text-center py-8'data-aos="zoom-in" data-aos-duration='400'>{title}</h1>
    );
};

export default Heading;