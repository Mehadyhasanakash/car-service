import React from 'react';

const Item = (props) => {
    const {title,id} = props.item

    return (
        <div>
            <h1>item : {id}</h1>
            <h1>name : {title}</h1>
        </div>
    );
};

export default Item;