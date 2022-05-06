import React from 'react';
import './styles/FormButton.scss';

const FormButton = ({handleSubmit}) => {

    return (
        <button
            onClick={handleSubmit}
        >
            <strong>Submit</strong>
        </button>
    )
}

export default FormButton;