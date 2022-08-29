import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import Edit from "../edit/Edit";
import { __getTodosThunk } from "../../redux/modules/todoSlice";

function Detail() {
  const { todos } = useSelector((state) => state.todos);
  const { id } = useParams();
  const navigate = useNavigate();

  const { title, body, writer } = todos.filter((todo) => todo.id == id)[0];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);

  return (
    <div>
      <p>id: {id}</p>
      <p>{title}</p>
      <p>{writer}</p>
      <p>{body}</p>

      <Link to={`/edit/${id}`} element={<Edit />} key={id}>
        <button> 수정하기</button>
      </Link>
      <button
        className="backBtn"
        onClick={() => {
          navigate(`/`);
        }}
      >
        이전으로
      </button>
    </div>
  );
}

export default Detail;
