import React, { Fragment } from 'react';
import { Button } from '../../lib/Button';
import styled from 'styled-components';

const ImageContainer = styled.div`
    text-align: center;
    margin-bottom: 5px;
    cursor: pointer;
`;

const NavbarBottom = styled.div`
    padding: 15px 15px;
    position: absolute;
    bottom: 45px;
    width: 275px;
    height: 55px;
    background-color: #f5f5f5;
`;

const Container = styled.div`
    position: relative;
    width: 305px;
    height: calc(100vh - 140px);
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

export const Walls = (props) => {

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
                <img src={rec.url} width={rec.width} height={rec.height} />
            </ImageContainer>
        );
    });

    return (
        <Fragment>
            <NavbarTop>
                Choose a Background
            </NavbarTop>

            <Container>
                {backgrounds}
            </Container>

            <NavbarBottom>
                <Button onClick={onButtonClick}>Weiter</Button>
            </NavbarBottom>
        </Fragment>
    )
}
