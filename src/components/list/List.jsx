import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getTodosThunk } from "../../redux/modules/todoSlice";
import Layout from "../layout/Layout";
import Todo from "../todo/Todo";
import { useNavigate } from "react-router-dom";
import { __deleteTodoThunk } from "../../redux/modules/todoSlice";

function List() {
  const { todos } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);
  return (
    <div>
      <button
        onClick={() => {
          navigate(`/form`);
        }}
      >
        글쓰러가기
      </button>

      <Layout>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </Layout>
    </div>
  );
}

export default List;
