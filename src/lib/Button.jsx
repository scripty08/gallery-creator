import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: 151.5px;
    height: 40px;
    cursor: pointer;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
`;

export const Button = (props) => {

    const { onClick, children } = props;

    return (
        <ButtonContainer onClick={onClick}>
            {children}
        </ButtonContainer>
    )
}
