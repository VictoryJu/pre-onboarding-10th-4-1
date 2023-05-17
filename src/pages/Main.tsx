import { useContext, useEffect, useRef, useState } from "react";

import Header from "../components/common/Header";
import { ITodo } from "../types/common";
import InputTodo from "../components/todo/InputTodo";
import TodoList from "../components/todo/TodoList";
import { getTodoList } from "../api/todo";
import SearchList from "../components/search/SearchList";
import { styled } from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";
import { TodoActionContex } from "../context/TodoActionContext";

const Main = () => {
  const { setOutSideClick, outSideClick } = useContext(TodoActionContex);
  const searchRef = useRef(null);

  useOutsideClick(searchRef, () => setOutSideClick(true));

  return (
    <S.Container>
      <S.Wrap>
        <Header />
        <S.DropDownContainer ref={searchRef}>
          <InputTodo />
          {!outSideClick && <SearchList />}
        </S.DropDownContainer>
        <TodoList />
      </S.Wrap>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  `,
  Wrap: styled.div`
    width: 100%;
    padding: 8rem 10px 4rem;
  `,
  DropDownContainer: styled.div`
    position: relative;
  `,
};

export default Main;
