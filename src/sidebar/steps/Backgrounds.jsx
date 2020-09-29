import React, { Fragment } from 'react';
import { Button } from '@scripty/react-buttons';
import styled from 'styled-components';

const ImageContainer = styled.div`
    text-align: center;
    margin-bottom: 5px;
    cursor: pointer;
`;

const Container = styled.div`
    position: relative;
    width: 305px;
    padding-top: 20px;
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
    height: 25px;
    background-color: #f5f5f5;
`;

export const Backgrounds = (props) => {

    const { imageData, onBackgroundsClick, setStep } = props;

    const onButtonClick = () => {
      setStep('pictures');
    };

    const backgrounds = imageData.backgrounds.map((rec, idx) => {

        const onImageClick = () => {
            onBackgroundsClick({ url: rec.url });
        }

        return (
            <ImageContainer key={idx} onClick={onImageClick}>
                <img src={rec.url} width={250} height={140} />
            </ImageContainer>
        );
    });

    return (
        <Fragment>
            <NavbarTop>
                Hintergrund wählen:
            </NavbarTop>

            <Container>
                {backgrounds}
            </Container>

            <NavbarBottom>
                <Button onClick={onButtonClick} color={'#000'} style={{width:'100%'}}>Weiter</Button>
            </NavbarBottom>
        </Fragment>
    )
}
