import React from 'react';
import styled from 'styled-components';
import { getImageSizes } from './helper';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  justify-content: center;
  cursor: pointer;
  ${props => (props.active) ? 'background: black; color: white' : 'background: white' }
`;

const Frame = styled.div`

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

    const { active, skeletonUrl, _id, onClick, url, frameUrl, size } = props;
    const { width, height } = getImageSizes(size);

    const onItemClick = () => {
        onClick({ _id });
    };

    return (
        <Container
            active={active}
            onClick={onItemClick}
        >
            <Frame
                frameUrl={frameUrl}
            >
                { (url) ? <img width={'100%'} height={'auto'} alt={''} src={url} /> : <img width={'100%'} height={'auto'} alt={''} src={skeletonUrl} /> }
            </Frame>

        </Container>
    )
}
