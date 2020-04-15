import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;

export const SlideContainer = styled.div`
  width: 100%;
  position: relative;
  border: #eaeaea solid 1px;
  border-radius: 5px 5px 0 0;
  padding: 20px;
`;

export const SlideContent = styled.div`
  width: 100%;
  animation: ${props => (props.tabindex === 0 ? slidein : slideout)} 3s linear;
`;

export const Image = styled.img`
  width: 100%;
  transition: linear 3s;
`;

export const Next = styled.span`
  width: 50px;
  height: 50px;
  position: absolute;
  right: -10px;
  top: 50%;
  cursor: pointer;
`;

export const Prev = styled.span`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 20px;
  cursor: pointer;
`;

/* animations transitions */

const slidein = keyframes`
  to {
    opacity: 0;
  }
  from {
    opacity: 1;
  }
`;

const slideout = keyframes`
  to {
    opacity: 1;
  }

  from {
    opacity: 0;
  }
`;
