import styled from 'styled-components';


const BrandStyles = styled.figure`
  display: flex;
  align-items:center;
  color: #ed4747;
  cursor:pointer;
 
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    font-size: ${props => props.font || "18px"};
  }
  svg {
    margin-right: 0.5rem;
    width: ${props => props.logo || "1.25rem"};
  }
  h2::first-letter {
    font-size: ${props => props.letter || "36px"};
    font-weight: 600;
  }
`;

export {BrandStyles}