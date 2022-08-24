import React, { useEffect, useRef, useState } from 'react'
import { Grid } from "@material-ui/core";
import TodoList from './Todo';
import { Todo } from '../Type';


export type Props = {
    lists: Array<Todo>
}
  
const List: React.FC<Props> = ({lists}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [isError, setIsError] = useState<boolean>(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (inputRef.current?.value === "") {
            setIsError(true);
            return null;
        }

        setIsError(false);
        e.currentTarget.reset();
    }
    return (
        <Grid container>
         {lists.map((todo) => (
            <TodoList key={todo.id} todo={todo.name} />
          ))}
     
        </Grid>
    );
}

export default List;