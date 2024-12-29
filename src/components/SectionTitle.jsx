import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center mb-5 w-4/12'>
            <p className='text-yellow-600 italic mb-2'>---{subHeading}---</p>
            <h3 className='uppercase text-3xl font-semibold border-y-2 p-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;