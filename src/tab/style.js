import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 12px;
  border: #eaeaea solid 1px;
  border-radius: 5px 5px 0 0;
  font-family: helvetica,arial;

  ul {
    width: 100%;
    display: flex;
    list-style: none;
  }
`;

export const Label = styled.li`
  font-size: 1.2em;
  font-weight: bold;
  line-height: 1.5em;
  border: #aaa solid 1px;
  cursor: pointer;
  font-size: 1.4rem;
  display: inline-block;
  padding: 10px 20px;
  margin-right: 20px;

  :hover, :focus {
    border-color: #eeeeee;
    background-color: #eaeaea;
  }
`;

export const Tab = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 12px;
  background-color:red;
`;
