import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.dic`
    padding: 16px;
    width: calc(100% - 32px);    
    display: flex;
    flex-items: column;
    align-items: center;
    justify-content: center;    
`;

const Container = styled.div`
    width: 100px;
    max-width: 720px;    
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return(
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) =>  {
                        setTitle(event.target.value);
                    }} />
                <TextInput
                     height={480}
                     value={content}
                     onChange={(event) =>  {
                         setTitle(event.target.value);
                     }} />
                <Button
                    title="new posting"
                    onClick={() => {
                        navigate("/");
                    }} /> 
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;