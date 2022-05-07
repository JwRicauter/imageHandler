import React from "react";

const Comments = ({clickHandler, comments, inputHandler}) => {

    return (
        <div>
            {Array.from(Array(comments), (e, i) => {
                return <textarea 
                    key={i+1}
                    placeholder={`Comment ${i + 1}`}
                    onClick={inputHandler} 
                    name={`comment_${i + 1}`}
                    onChange={inputHandler} 
                />
            })}
            <button onClick={clickHandler}>
                Click here to add another comment
            </button>
        </div>
    )
}

export default Comments;