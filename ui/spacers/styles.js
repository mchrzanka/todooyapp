import styled from 'styled-components';

const TextSpacer = styled.div`
      margin: ${props => props.margin || "0"};;
      display:flex;
      justify-content: center;
      align-items:center;;
      hr{
          flex:1;
          border:none;
          border-bottom:1px solid #d4d4d4;
      }
      p{
          margin:0.85rem;
          font-weight:700;
        
      }
`

export {TextSpacer}