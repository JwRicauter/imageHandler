import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImageItem from '../components/ImageItem';
import { list } from '../services/imagesdata';

const Home = () => {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        list().then(res => {
            setItems(res);
        })
    }, [setItems])

    return (
        <>
            { items.map(
                item => 
                <Link to={`/image/${item.id}`} key={item.id}>  
                    <ImageItem id={item.id} name={item.title}/>
                </Link>
             )}
        </>
    )
}

export default Home;