import React, { useState } from "react";
import styled from 'styled-components';

const Button = styled.button`
    background-color: blue;
    color: white;
    height: 50px;
    width: 90px;
    border-style: none;
`;

const Input = styled.input`
    height: 45px;
    margin-right: 10px;
    font-size: inherit;
`;

const Create: React.FC<{ addTask: (text: string) => void }> = ({ addTask }) => {
    const [task, setTask] = useState<string>("");
    const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!task) {
          alert("Please enter a todo");
        } else {
          addTask(task);
          setTask("");
        }
      };
    return (
        <div className="AddTodo">
            <form>
                <Input
                value={task}
                onChange={e => {setTask(e.target.value)}} />
                <Button onClick={submit}>Add</Button>
            </form>
        </div>
    );
}

export default Create;