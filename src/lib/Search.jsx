import React from 'react';
import styled from 'styled-components';
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';

const InputContainer = styled.div`
    width: 305px;
    height: 42px;
    position: relative;
    background: #fff;
`;

const Input = styled.input`
    width: 300px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    border: 1px solid #eaeaea;
    background-image: url(images/comment-author.gif);
    background-position: 7px 7px;
    background-repeat: no-repeat;
    text-indent: 35px;
    font-size: 15px;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #eaeaea;
    }
`;

const IconContainer = styled.span`
    display: block;
    position: absolute;
    top: 12px;
    left: 10px;
`;

export const Search = (props) => {

    const { onChange, placeholder = 'Suche...' } = props;

    const onInput = (e) => {
        onChange(e.target.value)
    };

    return (
        <InputContainer>
            <IconContainer><SearchOutlined style={{fontSize: 20}} /></IconContainer>
            <Input onInput={onInput} placeholder={placeholder}/>
        </InputContainer>
    )
}
