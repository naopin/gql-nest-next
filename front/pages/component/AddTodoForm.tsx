import React, { useRef, useState } from 'react'
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";


const AddTodoForm: React.FC = () => {
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
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex" }}>
                <Input
                    placeholder="Todo"
                    inputProps={{
                        "aria-label": "Description"
                    }}
                    inputRef={inputRef}
                    style={{ width: "90%" }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: "10%" }}
                >
                    Add
                </Button>

                {isError &&
                    <p className="error">
                        Error, must enter a value!
                    </p>
                }
            </form>

        </div>
    );
}

export default AddTodoForm;