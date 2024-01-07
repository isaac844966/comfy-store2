import React from 'react'
import ProductTitle from './ProductTitle'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const BestSelling = () => {
    return (
      <Wrapper>
           <div className='container'>
          <ProductTitle heading="Best Selling" text="Best selling products of the week" />
   <ProductCard/>
            </div> 
      </Wrapper>
      
  )
}

export default BestSelling

const Wrapper = styled.div`
margin: 1rem ;


@media screen  and (min-width: 992px){
    margin: 4rem 4rem;
}
`