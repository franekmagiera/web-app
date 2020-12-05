import React from 'react';

const RightPane = (props) => {
    return (
        <div>
            <span>{JSON.stringify(props.data)}</span>
        </div>
    )
};

export default RightPane;