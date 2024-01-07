import React from 'react'
import styled from 'styled-components'

const ProductTitle = ({heading,text,textAlign}) => {
    return (
      <Wrapper textAlign={textAlign}>
            <div className='Title-Container ' >
          <h3>{heading}</h3>
          <p>{text}</p>
    </div>  
      </Wrapper>
    
  )
}

export default ProductTitle

const Wrapper = styled.div`
 text-align: ${(props) => props.textAlign || 'left'};
 margin-left: 1rem;
 margin-top: 2rem;
 margin-bottom: 4rem;
 h3{
    font-weight:800;
    font-size: 34px;
    color:var(--black)
 }
 p{
    color:var(--Neutral500);
    font-size: 16px;
    font-weight:500
 }
`