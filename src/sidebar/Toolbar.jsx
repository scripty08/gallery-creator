import React from 'react';
import styled from 'styled-components';

const ToolbarContainer = styled.div`
    width: 305px;
    height: 42px;
    background: #fff;
`;

const CategoryButton = styled.div`
    width: 151.5px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
`;

const FilterButton = styled.div`
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

export const Toolbar = (props) => {

    const { setStep } = props;

    const onCategoryBtnClick = () => {
        console.log('category click', '  <------------');
    }

    const onFilterBtnClick = () => {
        setStep('filter');
        console.log('filter click', '  <------------');
    }

    return (
        <ToolbarContainer>
            <CategoryButton onClick={onCategoryBtnClick}>Alle Bilder</CategoryButton>
            <FilterButton onClick={onFilterBtnClick}>Filter</FilterButton>
        </ToolbarContainer>
    )
}
