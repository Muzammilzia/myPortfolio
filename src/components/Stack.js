import React from 'react';

export const Stack = props => {
    const listItems = props.items.map( element => {
        return(
            <li>
                <div>{element.icon}</div>
                <div>{element.language}</div>
            </li>
        ) 
    })

    return (
        <div className='stack'>
            <div style = {{display: "inline", fontSize: "35px", fontWeight: "550"}}> {props.svg} </div>
            <h1>  {props.headline}</h1>
            <ul>
                {listItems}
            </ul>      
        </div>
    );
}