import styled from "styled-components";


export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const Dialog = styled.div`
  width: 600px;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  top: 30%;
  left: calc(73% - 600px);
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 10px;
`;

export const ModalBody = styled.div`
  width: 100%;
  border-top: 1px solid #eee;
  padding: 10px;
`;

export const ModalFooter = styled.div`
  width: 100%;
  border-top: 1px solid #eee;
  padding: 10px;
`;
