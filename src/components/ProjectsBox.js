import React from 'react';

export const ProjectsBox = props => {
    return (
        <div className='projectsbox'>
            <h1>{props.head}</h1>
            <p>{props.description}</p>
            <a href= {`${props.src}`}><button>Source Code</button></a>
        </div>
    );
}