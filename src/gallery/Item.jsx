import React from 'react';
import styled from 'styled-components';
import { getImageSizes } from './helper';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  justify-content: center;
  cursor: pointer;
  ${props => (props.active) ? 'background: black; color: white' : 'background: white' }
`;

const Frame = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    padding: 8px;
    align-items: center;
    ${props => (props.frameUrl) ? `background: url("${props.frameUrl}");` : 'background: white;' }
    background-repeat: no-repeat;
    background-size: cover;
    transition: background-image .2s ease-in;
    background-position: 50%;
`;

export const Item = (props) => {

    const { active, position, _id, onClick, url, frameUrl, size } = props;
    const { width, height } = getImageSizes(size);

    const onItemClick = () => {
        onClick({ _id });
    };

    console.log(frameUrl, ' frameUrl <------------');

    return (
        <Container
            active={active}
            width={width}
            height={height}
            top={position.top}
            left={position.left}
            onClick={onItemClick}
        >
            <Frame
                frameUrl={frameUrl}
            >
                { (url) ? <img width={'100%'} height={'100%'} alt={''} src={url} /> : size }
            </Frame>

        </Container>
    )
}
