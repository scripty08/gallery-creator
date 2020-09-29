import React from 'react';
import { nanoid } from 'nanoid';
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

    const onAddBtnClick = (size) => {
        const imageData = userStore.getAt(0);

        imageData.imageWalls[0].images.push({
            _id: nanoid(),
            size: size,
            position: {top: 1, left:1},
            url: '',
            active: false
        });
        userStore.setData(imageData);
    }

    return (
        <ToolbarContainer>
            <SaveButton color={'#0b9e06'} label={'Speichern'} style={{marginRight: 5}} onClick={onSaveBtnClick}/>
            <AddButton label={'Bild Hinzufügen'} style={{marginRight: 5}} items={[
                <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, '21x30')}>21x30</a>,
                <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, '30x40')}>30x40</a>,
                <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, '40x50')}>40x50</a>,
                <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, '50x70')}>50x70</a>,
                <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, '70x100')}>70x100</a>
            ]} />
            <AddButton label={'Neu Erstellen'} style={{marginRight: 5}} />
        </ToolbarContainer>
    )
}
