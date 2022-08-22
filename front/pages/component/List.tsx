import React, { useEffect, useRef, useState } from 'react'
import { Grid } from "@material-ui/core";
import Todo from './Todo';


const List: React.FC = () => {
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
            <Todo />
        </Grid>
    );
}

export default List;