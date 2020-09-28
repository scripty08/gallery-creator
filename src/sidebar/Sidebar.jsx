import React from 'react';
import { Backgrounds } from './steps/Backgrounds';
import styled from 'styled-components';
import { Pictures } from './steps/Pictures';
import { Frames } from './steps/Frames';

const SidebarContainer = styled.div`
    width: 305px;
    float: left;
    display: inline-block;
`;

export const Sidebar = (props) => {

    const { step, setStep } = props;

    const renderStep = () => {
        switch (step) {
            case 'backgrounds':
                return <Backgrounds {...props} setStep={setStep} />;
            case 'pictures':
                return <Pictures {...props} setStep={setStep} />
            case 'frames':
                return <Frames {...props} setStep={setStep} />
        }
    }

    return (
        <SidebarContainer>
            {renderStep()}
        </SidebarContainer>
    )
}
