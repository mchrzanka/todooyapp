import styled from 'styled-components';



const Legal = styled.p`
 font-size: ${props => props.size || "12px"};
 color: ${props => props.color || "inherit"};
 width: ${props => props.width ||  "inherit"};; 
    
 &.v-center{
        margin: 0 auto;
        
 }
`

 
 
const HighLight = styled.span` 
 color:#ed4747;  
`

 

export {Legal,  HighLight}