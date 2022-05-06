import React, { useState } from "react";
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


            {Array.from(Array(comments), (e, i) => {
                return <textarea 
                    key={i+1}
                    placeholder={`Comment ${i + 1}`}
                    onClick={inputHandler} 
                    name={`comment_${i + 1}`}
                    onChange={inputHandler} 
                />
            })}

            <button onClick={addComment}>
                Click here to add another comment
            </button>
        </div>

    )
}

export default Form;