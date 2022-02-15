import React from 'react';
import {Stack} from './Stack';
import { StackData } from './data';

export const TechnologyStack = () => {
    const stackList = StackData.map(data => {
        return(
            <Stack
                headline = {data.headline}
                items = {data.items}
                svg = {data.svg}    
            />
        )
    })
    return (
        <div className='technologystackcontainer' id = "TechnologyStack">
            <h1 style={{textAlign: "center"}}>Technology Stack</h1>
            <div className='stackcontainer'>
                {stackList}
            </div>
        </div>
    );
}