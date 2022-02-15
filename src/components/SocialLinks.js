import React from 'react'

export const SocialLinks = (props) => {
    const handleclick = () => {
        window.open(`${props.src}`)
    }
    return (
        <div onClick={handleclick} className = "SocialLinks">
            {props.logo}
        </div>
    )
}