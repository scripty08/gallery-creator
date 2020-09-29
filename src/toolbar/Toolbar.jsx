import React from 'react';

import styled from 'styled-components';
import { AddButton, SaveButton } from '@scripty/react-buttons';
import { useStore } from '@scripty/react-store';

const ToolbarContainer = styled.div`
    width: calc(100% - 30px);
    height: 25px;
    padding: 10px 15px;
    background-color: #f5f5f5;
    line-height: 20px;
`;

export const Toolbar = (props) => {
    const { userStore } = useStore('userStore');
    const { step, setStep } = props;

    const onSaveBtnClick = () => {
        console.log('onSaveBtnClick', '  ---------------------- ');
    }

    const onAddBtnClick = (e) => {
        const imageData = userStore.getAt(0);
        console.log(e, ' e ---------------------- ');
        console.log(imageData, ' e ---------------------- ');

        imageData.imageWalls[0].images.push({
            _id: 'x34',
            size: '40x50',
            position: {top: 1, left:0},
            url: '',
            active: false
        });
        userStore.setData(imageData);
    }

    return (
        <ToolbarContainer>
            <SaveButton color={'#0b9e06'} label={'Speichern'} style={{marginRight: 5}} onClick={onSaveBtnClick}/>
            <AddButton onClick={onAddBtnClick} label={'Bild Hinzufügen'} style={{marginRight: 5}} items={[
                <a aria-current={'page'} href={'#'} className={'active'}>50x70</a>,
                <a aria-current={'page'} href={'#'} className={'active'}>100x70</a>
            ]} />
            <AddButton label={'Neu Erstellen'} style={{marginRight: 5}} />
        </ToolbarContainer>
    )
}
