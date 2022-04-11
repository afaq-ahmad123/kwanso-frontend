import React from "react";
import { ITasks } from "./App";
import styled from 'styled-components';

type IProp = {
    isDelete: boolean;
    tasks: ITasks,
    checkTask: (id: number) => void,
    deleteTasks: () => void
}

const ListComp = styled.div`
    display: flex;
`;

const Card = styled.div`
    height: 60px;
    width: 150px;
    background-color: #f0eeeb;
    margin: 10px;
    padding-top: 40px;
    text-align: center;
`;

const Button = styled.button`
    background-color: blue;
    color: white;
    height: 50px;
    width: 150px;
    margin: 10px;
    border-style: none;
`;

const List: React.FC<IProp> = ({ isDelete, tasks, checkTask, deleteTasks }) => {
    return (
        <div>
            <ListComp>
                {tasks.tasks.map(task => {
                    return (
                        <Card key={task.id}>
                            {task.title}
                            {isDelete && <input type="checkbox" checked={task.checked} onClick={() => checkTask(task.id)} />}
                        </Card>
                    );
                })}
            </ListComp>
            {isDelete && <Button onClick={deleteTasks}>Delete selected Tasks</Button>}
        </div>
    );
}

export default List;