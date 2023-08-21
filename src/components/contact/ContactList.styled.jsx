import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  border: 3px solid #000;
  list-style: none;
`

export const Item = styled.li`
  padding: 5px;
  border-radius: 8px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`

export const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 8px;
  background-color: blue;
  color : white;
  font-size: 20px;
`