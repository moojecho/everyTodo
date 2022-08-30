import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import TodoDelete from "./TodoDelete";
import { __getTodosThunk, __deleteTodoThunk } from "../../redux/modules/todoSlice";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const redirect = useHref();
  // const onDeleteHandler = (id) => {
  //   dispatch(__deleteTodoThunk(id));
  //   return navigate(`/`);
  // };
  console.log(todo.id, "todo에있는 지울 id");
  return (
    <Card>
      <Link to={`/${todo.id}`} key={todo.id}>
        <h4>{todo.title}</h4>
        <h6>{todo.writer}</h6>
      </Link>
      <button onClick={() => dispatch(__deleteTodoThunk(todo.id))}>삭제하기</button>
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
