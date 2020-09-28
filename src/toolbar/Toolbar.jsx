import React from 'react';

import styled from 'styled-components';

const ToolbarContainer = styled.div`
    width: calc(100% - 30px);
    height: 20px;
    padding: 10px 15px;
    background-color: #f5f5f5;
    line-height: 20px;
`;

export const Toolbar = (props) => {

    const { step, setStep } = props;

    return (
        <ToolbarContainer>
            toolbar
        </ToolbarContainer>
    )
}
