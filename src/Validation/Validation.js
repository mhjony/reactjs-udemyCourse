import React from 'react'

const Validation = (props) => {
    let text = 'This is short'
    if (props.inputLength.length > 5) {
        text = 'This is long enough'
    }
    return (
        <div>
            {text}
        </div>
    )
}

export default Validation