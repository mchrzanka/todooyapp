import styled from 'styled-components';

 

const TagLine = styled.p`
   text-align: ${props => props.align || "left"};
   width: ${props => props.width || "inherit"};
   font-size: ${props => props.size || "inherit"};
   color: ${props => props.color || "inherit"};

  
`;

export   {TagLine};