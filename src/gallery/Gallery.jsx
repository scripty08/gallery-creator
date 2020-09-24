import React, { useState } from 'react';

import styled from 'styled-components';
import { Item } from './Item';

const Container = styled.div`
  display: inline-block;
  top: 0px;
  padding: 15px;
  position: absolute;
  width: calc(100% - 410px);
  height: 100%;
  background: ${props => `url("${props.url}");`}
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image .2s ease-in;
  background-position: 50%;
`;

const ItemContainer = styled.div`
  display: inline-block;
  top: 60px;
  padding: 15px;
  position: absolute;
  width: 62%;
  height: 77%;
`;

export const Gallery = (props) => {
    const [id, setId] = useState(false)
    const { userData, onClick, galleryBackgroundUrl } = props;
    const imageWalls = userData.imageWalls[0];

    const onItemClick = ({_id}) => {
        setId(_id);
        onClick({_id})
    }

    const items = imageWalls.images.map((item, idx) => {
        if (id === item._id) {
            item.active = true;
        }
        return (
            <Item
                key={idx}
                url={item.url}
                frameUrl={item.frameUrl}
                active={(id === item._id) ? 'active': ''}
                size={item.size}
                position={item.position}
                onClick={onItemClick}
                _id={item._id}
            />
        )
    });

    return (
        <Container url={galleryBackgroundUrl}>
            <ItemContainer>{items}</ItemContainer>
        </Container>
    )
}