import React from "react";

const Comments = ({clickHandler, comments, inputHandler}) => {

    return (
        <div className='form-group'>
            {Array.from(Array(comments), (e, i) => {
                return <div className='row' key={i+1}><div className='col-12'><textarea 
                    placeholder={`Comment ${i + 1}`}
                    onClick={inputHandler} 
                    name={`comment_${i + 1}`}
                    onChange={inputHandler} 
                /></div></div>
            })}
            <button className='btn btn-outline-secondary mb-4' onClick={clickHandler}>
                Click here to add another comment
            </button>
        </div>
    )
}

export default Comments;