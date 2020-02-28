import styled, { keyframes } from 'styled-components';
import { Alert } from 'antd'
const fadeIn = keyframes`
  0% {
    transform: scale(.25);
    opacity: 0;
  }
  90% {
    transform: scale(1.1);
    opacity: 0.8;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
  
`;

const fadeOut = keyframes`
 0%  {
    transform: scale(1);
    opacity: 0;
  }
  100% {
    transform: scale(.12);
    opacity: 1;
  }
`;
export const Fade = styled(Alert)`
  visibility: ${props => props.out ? 'visible' : 'hidden'};
  animation: ${props => props.out ? fadeIn : fadeOut} 0.3s linear;
  transition: visibility 0.3s ease-in-out;
`;