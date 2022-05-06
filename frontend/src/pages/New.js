import React, { useState } from "react";

import Form from '../components/Form';
import FormButton from "../components/FormButton";

import {upload} from '../services/imagesdata'

const New = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState({})
    const [flag, setFlag] = useState(false);


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
        result.then(isOk => {
            setTitle('');
            setComments({});
            setFile(null);
            setFlag(isOk);
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