import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    width: 30%;
    margin-top: 20px;
    background-color: blue;
    color: white;
    padding: 10px;
    font-size: x-large;
    margin-bottom: 20px;
    justify-content: space-between;
`;

function Header() {
    const navigate = useNavigate();
    return (
        <Navbar>
            <div onClick={() => navigate('/list-tasks')}>List</div>
            <div onClick={() => navigate('/create-task')}>Create</div>
            <div onClick={() => navigate('/bulk-delete')}>Delete</div>
        </Navbar>
    );
}

export default Header;