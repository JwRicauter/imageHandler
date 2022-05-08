import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import Form from '../components/Form';
import FormButton from "../components/FormButton";

import {upload} from '../services/imagesdata'

const New = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState({})
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();

    const fileHandler = (file) => {
        setFile(file);
    };

    const inputHandler = (e) => {
        let isTitle = e.target.name === 'title';
        if (isTitle) setTitle(e.target.value);
        else {
            comments[e.target.name] = e.target.value;
            setComments(comments);
        }
    }

    const handleSubmit = () => {
        let result = upload(
            {'file': file, 'title': title, 'comments': JSON.stringify(comments)}
        )
        console.log(result);
        result.then(isOk => {
            console.log(isOk);
            setFlag(isOk);
            setTitle('');
            setComments({});
            setFile(null);
            
            if (isOk) navigate("/");
        });

    }


    return (
        <div>
            <Form fileHandler={fileHandler} inputHandler={inputHandler}/>
            <FormButton handleSubmit={handleSubmit} />
            {
                flag && <p>the data was loaded successfully!</p>
            }
        </div>

    )
}

export default New;