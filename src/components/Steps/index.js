import React from 'react'
import './Steps.scss'
import Option from '../Options'

export default () => {
    return (
        <div className="step step--1 flex flex-wrap justify-center relative">
            <Option name="paper md:mx-16 md:my-4"></Option>
            <Option name="scissors md:mx-16 md:my-4"></Option>
            <div className="w-full"></div>
            <Option name="rock md:mx-16 md:my-4"></Option>
            <svg className="triangle" role="presentation" viewBox="0 0 384 384">
                    <path d="M0,21.333l192,341.333L384,21.333H0z M72,64h240L192,277.333L72,64z" fill="#17223E"/>
            </svg>
        </div>
    )
}