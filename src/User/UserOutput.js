import React from 'react'
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is user output first line</p>
            <p>{props.userName}</p>
        </div>
    )
};

export default UserOutput;