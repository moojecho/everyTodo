import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addComment } from "../../redux/modules/CommentSlice";

function CommentForm() {
  const paramsId = useParams().id;
  const dispatch = useDispatch();
  const [isshow, setIsShow] = useState(false);
  const [comments, setComments] = useState({ name: "", comment: "", todoId: paramsId });
  const AddCommentClick = (e) => {
    e.preventDefault();
    dispatch(addComment({ ...comments, todoId: parseInt(paramsId) }));
    setComments({
      name: "",
      comment: "",
    });
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setComments({
      ...comments,
      [name]: value,
    });
  };

  const ToggleClick = () => {
    setIsShow(!isshow);
    //  retun( !isShow?display:none:0)
  };

  return (
    <InputContainer onClick={ToggleClick}>
      <InputStyle onChange={onChangeInputHandler} name="name" placeholder="이름(5자 이내)"></InputStyle>
      <InputStyle onChange={onChangeInputHandler} name="comment" placeholder="댓글을 추가하세요(100자 이내)"></InputStyle>
      <ButtonStyle onClick={AddCommentClick}>추가하기</ButtonStyle>
    </InputContainer>
  );
}

export default CommentForm;

const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const InputStyle = styled.input`
  border-radius: 10px;
  height: 40px;
  border: solid 1px black;
  margin-right: 10px;
  width: 200px;
`;
const ButtonStyle = styled.button`
  border-radius: 10px;
  padding: 5px 15px;
  border: 0;
  background-color: skyblue;
  margin-right: 5px;
`;
