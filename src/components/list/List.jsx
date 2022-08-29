import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getTodosThunk } from "../../redux/modules/todoSlice";
import Layout from "../layout/Layout";
import Todo from "../todo/Todo";

function List() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </Layout>
    </div>
  );
}

export default List;
