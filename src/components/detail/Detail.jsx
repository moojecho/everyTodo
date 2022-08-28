import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { todos } = useSelector((state) => state.todos);
  console.log(todos, "디테일투두스나와라!!!!1111!!!!!!");
  const params = useParams();
  const id = params.id;

  const { title, body, writer } = todos.filter((todo) => todo.id == id)[0];

  return (
    <div>
      <p>id: {id}</p>
      <p>{title}</p>
      <p>{writer}</p>
      <p>{body}</p>

      <Link to={`/edit/${id}`} key={id}>
        <button> 수정하기</button>
      </Link>
    </div>
  );
}

export default Detail;
