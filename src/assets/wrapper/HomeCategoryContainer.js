import styled from "styled-components";

const Wrapper = styled.div`
.category-container{
    display: grid;
    margin:1rem 1rem;
    gap:1rem;
    
}
.category{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left:2rem ;
    border:10px
}
 .one{
    background: var(--primary100);

}
 .two{
    background-color:  var(--primary200);
}
 .one img{
    width: 40vw;
}
 .two img{
    width: 30vw;
}
h4{
    font-weight:700;
    font-size: 30px;
    line-height:35.7px;
    color:var(--black);
    margin-top:2rem

}
.link{
    display:flex;
    gap:1rem;
    font-size: 18px;
    align-items: center;
    color:var(--black);
    font-weight:700;
    margin-bottom:2rem
}
@media screen  and (min-width:992px){
    .category-container{
        grid-template-columns: 1fr 1fr;
        margin:1rem 4rem;
       
    }
    .category{
      padding:2rem 0 2rem 3rem;
      }
    .one img{
        width: 15vw;
    }
     .two img{
        width: 10vw;
    }
    h4{

    font-size: 36px;
    line-height: 40.7px;

}
}
`
export default Wrapper