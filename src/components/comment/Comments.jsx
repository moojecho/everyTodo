import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash, BsPencil } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { removeComment, __getCommentList } from "../../redux/modules/CommentSlice";
import CommentForm from "./CommentForm";

const Comment = () => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.comment);
  const paramsId = useParams().id;
  useEffect(() => {
    dispatch(__getCommentList(paramsId));
  }, [dispatch]);

  return (
    <div>
      <div onClick={() => {}}>눌러서댓글보기</div>
      <CommentForm></CommentForm>
      <div>
        {commentList.map((comment) => {
          return (
            <div>
              <CommentContainer key={comment.id}>
                <CommentList>
                  <div>
                    <NameStyle>{comment.name}</NameStyle>
                    <CommentStyle>{comment.comment}</CommentStyle>
                  </div>
                  <div>
                    <IconButton>
                      <BsPencil size="20" color="white" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        dispatch(removeComment(comment.id));
                      }}
                    >
                      <BsTrash size="20" color="white" />
                    </IconButton>
                  </div>
                </CommentList>
              </CommentContainer>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;

const CommentContainer = styled.div`
  justify-content: space-between;
`;
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

const CommentList = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NameStyle = styled.p`
  font-size: 10px;
  margin: 0;
`;
const CommentStyle = styled.p`
  margin: 0;
`;

const IconButton = styled.button`
  border-radius: 10px;
  padding: 5px 5px;
  border: 0;
  background-color: skyblue;
  margin-right: 5px;
`;
