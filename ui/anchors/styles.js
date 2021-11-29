import styled from 'styled-components';

const HyperLink = styled.a` 
   display: ${props => props.display || "inline"}; 
   text-align: ${props => props.align || "left"};
   background-color: ${props => props.link || "inherit"}; 
   font-weight: 600;
   font-size:${props => props.size || "1rem"};
   color: ${props => props.color || "#3b384f"}; 
   cursor: pointer;   
   &:hover{
      color: ${props => props.hover || "#3b384f"}; 
      text-decoration:underline;
   }
`;


const HyperLinkButton = styled.a` 
   display:inline-block;
   width: ${props => props.width || "100%"};;
   padding:0.5rem 2rem;
   text-align:center;
   border:none;
   border-radius: 4px;
   box-shadow: 0 0 3px 1px rgba(0,0,0,0.125);
   background-color: ${props => props.bgcolor || "black"};;
   font-weight: 500;
   font-size:${props => props.size || "1rem"};
   color: ${props => props.color || "white"};  
   cursor: pointer;  
   background:linear-gradient(to bottom,#ED4747 0%,#f05151 50%,#ED4747 100%);

 
      &:hover{
         color: ${props => props.color || "white"}; 
   }
    
`

export {HyperLink, HyperLinkButton}