import React from 'react'

export default (props) => {
    return (
        <button className={`Btn Btn--${props.name}`}>{props.name}</button>
    )
}