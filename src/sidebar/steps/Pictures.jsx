import React, { Fragment } from 'react';
import { Button } from '../../lib/Button';
import styled from 'styled-components';

const ImageContainer = styled.div`
    text-align: center;
    margin-bottom: 5px;
    cursor: pointer;
`;

const Container = styled.div`
    position: relative;
    width: 380px;
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
    padding: 10px 20px;
    line-height: 20px;
    position: absolute;
    top: 0;
    width: 340px;
    height: 20px;
    background-color: #f5f5f5;
    z-index: 5000;
`;

const NavbarBottom = styled.div`
    padding: 15px 15px;
    position: absolute;
    bottom: -10px;
    width: 349px;
    height: 100px;
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
                {images}
            </Container>

            <NavbarBottom>
                <Button onClick={onForwardButtonClick}>Weiter</Button>
                <Button onClick={onBackButtonClick}>Zurück</Button>
            </NavbarBottom>
        </Fragment>
    )
}
