import styled from 'styled-components';

const Title = styled.h1`
   font-size: ${props => props.size || "2rem"};;
   color: ${props => props.color || "#272738"}; 
   font-weight:600;
  

`

const Tagline = styled.p`
      font-size:14px;
` 


export{ Title, Tagline}