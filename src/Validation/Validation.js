import React from 'react'

const validation = (props) => {
    let validationMessage = 'Input is too short';
    if (props.inputLength >= 5) {
        validationMessage = 'Input is long enough';
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation;