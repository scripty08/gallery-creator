import React from 'react';
import styled from 'styled-components';
import { Button } from '../lib/Button';

const ToolbarContainer = styled.div`
    width: 305px;
    height: 42px;
    background: #fff;
`;

export const Toolbar = (props) => {

    const { setStep } = props;

    const onCategoryBtnClick = () => {
        console.log('category click', '  <------------');
    }

    const onFilterBtnClick = () => {
        setStep('filter');
    }

    return (
        <ToolbarContainer>
            <Button onClick={onCategoryBtnClick}>Alle Bilder</Button>
            <Button onClick={onFilterBtnClick}>Filter</Button>
        </ToolbarContainer>
    )
}
