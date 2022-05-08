import React from 'react';


const FormButton = ({handleSubmit}) => {

    return (
        <button
            className='btn btn-outline-success'
            onClick={handleSubmit}
        >
            <strong>Submit</strong>
        </button>
    )
}

export default FormButton;