import { useContext } from "react";
import { ITodo } from "../../types/common";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../context/TodoContext";
import { styled } from "styled-components";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <S.EmptyLine>...</S.EmptyLine>
  );
};

const S = {
  EmptyLine: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    letter-spacing: 1.5rem;
    margin-left: 0.75rem;
    color: #ececec;
  `,
};
export default TodoList;
