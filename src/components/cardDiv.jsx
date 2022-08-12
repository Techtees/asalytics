  import React from 'react';
  import styled from 'styled-components';
  import './../App.css';
  import Card from './Card';

    const Container = styled.div`
    max-width:1312px;
    width: 85%;
    margin:0 auto;
    
    .flex-container{
      display:flex;
      flex-wrap:wrap;
      flex-direction:row;
      justify-content: space-between;
      gap:32px 0px;
      padding: 2em 0;
    }
    `
    const Title = styled.div`
    width:584px;
    margin: 20px auto;
    
    .title{
        color:var(--black);
        font-family:Readex Pro;
        font-weight:600;
        line-height:45px;
        text-size:36px;
        text-align:center;
    }
    `


  const CardDiv = ()=> {
        return(
            <Container>
                <Title>
                     <h1 className='title'>List of Algorand Standard Assets on ASAlytics</h1>
                </Title>
                <div className='flex-container'>
                    <Card />
                </div>
            </Container>
        )
  }

  export default CardDiv;
  