import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Todo({ todo }) {
  return (
    <Card>
      <Link to={`/${todo.id}`} key={todo.id}>
        <p>{todo.title}</p>
        <p>{todo.writer}</p>
      </Link>
    </Card>
  );
}

export default Todo;

const Card = styled.div`
  height: 90px;
  border: 1px solid #000000;
  background-color: #ffffff;
  width: 500px;
`;
