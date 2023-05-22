import { FaTrash } from "react-icons/fa";
import { useState, useContext } from "react";

import { TodoContext } from "../../context/TodoContext";
import Spinner from "../common/Spinner";
import { styled } from "styled-components";

type Props = {
  id: string;
  title: string;
};

const TodoItem = ({ id, title }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { deleteTodoItem } = useContext(TodoContext);

  const handleRemoveTodo = async (id: string) => {
    try {
      setIsLoading(true);
      await deleteTodoItem(id);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.TodoWrap>
      <span>{title}</span>
      <S.TodoLine>
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo(id)}>
            <S.TrashIcon />
          </button>
        ) : (
          <Spinner />
        )}
      </S.TodoLine>
    </S.TodoWrap>
  );
};

const S = {
  TodoWrap: styled.li`
    list-style-type: none;
    padding: 17px 1.5rem;
    border-bottom: 1px solid #eaeaea;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    &:hover {
      opacity: 0.85;
      background-color: #eaeaea;
    }
  `,
  TodoLine: styled.div`
    float: right;
  `,
  TrashIcon: styled(FaTrash)`
    color: orangered;
    font-size: 16px;
    &:hover {
      opacity: 0.5;
    }
  `,
};

export default TodoItem;
