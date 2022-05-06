import React from 'react';
import './styles/ImageItem.scss';

const ImageItem = ({id, name}) => {

    return (
        <div className='card'>
            <p>Image #{id}</p>
            <p>name: {name}</p>
        </div>

    )
}

export default ImageItem;