import React from 'react'

const Char = (props) => {
    const textStyle = {
        display: 'inline-block',
        padding: '10px',
        margin: '10px',
        border: '1px solid black',
        textAlign: 'center'
    }
    return (
        <div style={textStyle} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default Char;