import styled from 'styled-components'

 

const Button = styled.button`
   width: ${props => props.width || '100%'};
   background-color: ${props => props.bgcolor || "transparent"};;
   border:none;
   border-radius: 4px;
   box-shadow: ${props => (props.noBoxShodow)? "none": "0 0 2px 1px rgba(0,0,0,0.125)"};;
   color: ${props => props.color || "#888888"};
   padding:0.5rem 2rem;
   font-weight: 600;
`


 

const ProviderButton = styled(Button)`
 
   width: ${props => props.width || "100%"};;
 
   background-color: ${props => props.bgcolor || "transparent"};;
   color: ${props => props.color || "#3b384f"};;
   padding:0.5rem 0;
   font-weight: 500;
   font-size:${props => props.size || "1rem"};
   cursor: pointer; 
      span{
         vertical-align:middle;
         margin-left: 0.5rem;
      }
   
   
`






export {Button, ProviderButton}