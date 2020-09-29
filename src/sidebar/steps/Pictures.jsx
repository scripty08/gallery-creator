import React, { Fragment } from 'react';
import styled from 'styled-components';
import { AddButton, Button, RightButton } from '@scripty/react-buttons';
import { nanoid } from 'nanoid';

const ImageContainer = styled.div`
    text-align: center;
    margin-bottom: 5px;
    cursor: pointer;
    float:left;
    margin: 2px;
`;

const Container = styled.div`
    position: relative;
    width: 305px;
    padding-top: 10px;
    height: calc(100vh - 110px);
    overflow-y: scroll;
    top: 40px;
    bottom: 0;

    .image-container {
        float: left;
        margin: 15px;
        cursor: pointer;

        img {
            height: 126px;
        }

        .description {
            font-size: 12px;
            text-align: center;
        }
    }
`;

const NavbarTop = styled.div`
    padding: 10px 15px;
    line-height: 20px;
    position: absolute;
    top: 0;
    width: 275px;
    height: 20px;
    background-color: #f5f5f5;
    z-index: 5000;
`;

const NavbarBottom = styled.div`
    padding: 15px 15px;
    position: absolute;
    bottom: 0;
    width: 275px;
    height: 55px;
    background-color: #f5f5f5;
`;

export const Pictures = (props) => {

    const { imageData, onPicturesClick, setStep } = props;

    const onForwardButtonClick = () => {
        setStep('frames');
    };

    const onBackButtonClick = () => {
        setStep('backgrounds');
    };

    const images = imageData.images.map((rec, idx) => {

        const onImageClick = () => {
            onPicturesClick({ url: rec.url });
        }

        return (
            <ImageContainer key={idx} onClick={onImageClick}>
                <img src={rec.url} width={90} height={130} />
            </ImageContainer>
        );
    });

    const onAddBtnClick = (category) => {
        console.log(category, ' category ---------------------- ');
    }

    return (
        <Fragment>
            <NavbarTop>
                <RightButton label={'Filter'} style={{marginRight: 5}} items={[
                    <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, 'Alle')}>Alle</a>,
                    <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, 'Arabisch')}>Arabisch</a>,
                    <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, 'Tiere')}>Tiere</a>,
                    <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, 'Kunst')}>Kunst</a>,
                    <a aria-current={'page'} href={'#'} className={'active'} onClick={onAddBtnClick.bind(null, 'Sprüche')}>Sprüche</a>
                ]} />

                <AddButton label={'Portrait'} />
            </NavbarTop>

            <Container>
                {images}
            </Container>

            <NavbarBottom>
                <Button style={{marginBottom:5, width:'100%'}} onClick={onForwardButtonClick} color={'#000'}>Weiter</Button>
                <Button  style={{width:'100%'}} onClick={onBackButtonClick}>Zurück</Button>
            </NavbarBottom>
        </Fragment>
    )
}
