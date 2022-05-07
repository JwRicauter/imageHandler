import React, { useState } from "react";
import Comments from '../components/Comments';
import './styles/Form.scss';
import { FileUploader } from "react-drag-drop-files";

const Form = ({fileHandler, inputHandler}) => {
    const [comments, setComments] = useState(1);

    const addComment = () => {
        setComments(comments + 1)
    }

    return (
        <div className='form-group'>
            <input 
              type="text" 
              required 
              placeholder="Title" 
              onChange={inputHandler} 
              name='title'
            />
            <FileUploader handleChange={fileHandler} name="file" />

            
            <Comments 
             clickHandler={addComment} 
             comments={comments}
             inputHandler={inputHandler}
            />
        </div>

    )
}

export default Form;