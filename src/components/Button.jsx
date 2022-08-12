import React from 'react';
import './../App.css'

const btn = {
    width: '199px',
    height:'60px',
    borderRadius:'8px',
    padding: '20px, 40px, 20px, 40px',
    background:'var(--black)',
    color:'var(--white)',
    fontFamily:'Readex Pro',
    textSize:'16px',
    fontWeight:'400',
    lineHeight:'20px',

}

const Button = (props) => {
    const {text} = props
    return(
        <button style={btn}>{text}</button>
    )
}

export default Button;