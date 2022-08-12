import React from 'react';
import './../App.css'
import styled from 'styled-components'
import maskIcon from './../images/mask.svg'

const CardContainer = styled.div`
    width:304px;
    height:185px;
    border: 1px solid var(--grey);
    border-radius:10px;
    text-align:center;

    // margin-bottom: 52px;

    .center-items{
        padding: 32px 0px 32px 0px;
    }
    .center-items  h2{
        margin:0px 0px 8px 0px;
    }
    .btn {
        text-size:12px;
        color:var(--white);
        background-color:var(--green);
        padding:8px;
        border-radius:8px;
        border:none; 
    }
    .btn2 {
        text-size:12px;
        color:var(--white);
        background-color:var(--red);
        padding:8px;
        border-radius:8px;
        border:none; 
    }
    
`
const cards = [
    {icon: maskIcon, name:"Algorand", status:'Available'},
    {icon: maskIcon, name:"Algorand", status:'Unvailable'},
    {icon: maskIcon, name:"Algorand", status:'Available'},
    {icon: maskIcon, name:"Algorand", status:'Available'},
    {icon: maskIcon, name:"Algorand", status:'Unvailable'},
    {icon: maskIcon, name:"Algorand", status:'Available'},
    {icon: maskIcon, name:"Algorand", status:'Available'},
    {icon: maskIcon, name:"Algorand", status:'Unvailable'},
    {icon: maskIcon, name:"Algorand", status:'Available'},
    {icon: maskIcon, name:"Algorand", status:'Available'},
    {icon: maskIcon, name:"Algorand", status:'Unvailable'},
    {icon: maskIcon, name:"Algorand", status:'Available'},
    
]

const Card = (props) => {
    return (
        <>
            {cards.map( card => { return (
                <CardContainer>
                    <div className='center-items'>
                        <img src={card.icon} />
                        <h2>{card.name}</h2>
                        <button className={card.status === 'Available' ? 'btn' : 'btn2'}>{card.status}</button>
                    </div>
                </CardContainer>
            )}) }
        </>
    )
}
export default Card

