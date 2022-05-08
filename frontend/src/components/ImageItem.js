import React from 'react';
import './styles/ImageItem.scss';

const ImageItem = ({id, name}) => {

    return (
        <div className='card mb-4'>
            <div className='card-body'>
                <p className='text-secondary'><strong>Image #{id}</strong></p>
                <p className='text-secondary'>name: {name}</p>
            </div>
            
        </div>

    )
}

export default ImageItem;