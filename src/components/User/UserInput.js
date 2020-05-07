import React from 'react'

const UserInput = (props) => {
    const styleInput = {
        border: '2px solid red',
        width: '150px',
        height: '20px'
    };
    return (
        <div className="UserInput">
            <input type="text"
                style={styleInput}
                onChange={props.change}
                value={props.currentName} />
        </div>
    )
};

export default UserInput;