import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Todo({ todo }) {
  return (
    <Card>
      <Link to={`/${todo.id}`} key={todo.id}>
        <h4>{todo.title}</h4>
        <h6>{todo.writer}</h6>
      </Link>
      <button>삭제하기</button>
    </Card>
  );
}

export default Todo;

const Card = styled.div`
  height: 130px;
  border: 1px solid #000000;
  background-color: #ffffff;
  width: 500px;
`;
