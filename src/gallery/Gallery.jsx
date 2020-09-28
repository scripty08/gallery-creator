import React, { useState } from 'react';

import styled from 'styled-components';
import { Item } from './Item';
import Draggable from 'react-draggable';
import { getImageSizes } from './helper';
import { CloseButton, MoveButton, SaveButton } from '@scripty/react-buttons';

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

const Toolbar = styled.div`
  display: inline-block;
  top: -10px;
  right: -10px;
  opacity: 0.8;
  position: absolute;
  z-index: 5000;
`;

export const Gallery = (props) => {
    const [id, setId] = useState(false)
    const { userData, onClick, galleryBackgroundUrl } = props;
    const imageWalls = userData.imageWalls[0];

    const onItemClick = ({ _id }) => {
        setId(_id);
        onClick({ _id })
    }

    const items = imageWalls.images.map((item, idx) => {
        if (id === item._id) {
            item.active = true;
        }
        const { width, height, top, left, skeletonUrl } = getImageSizes(item.size);

        const onCloseBtnClick = () => {
            delete imageWalls.images[idx];
        };

        const onSaveBtnClick = () => {
            setId(false)
        }

        return (

            <Draggable
                handle="strong"
                className={'draggableContainer'}
            >

                <div className="box no-cursor" style={{position: 'absolute', width: width, left: left, top: top}}>

                    {(id === item._id) ?

                        <strong className="cursor">
                            <Toolbar>
                                <MoveButton style={{ cursor:'move' }} color={'#fff'} iconBtn />
                                <SaveButton onClick={onSaveBtnClick} color={'#12a525'} iconBtn />
                                <CloseButton onClick={onCloseBtnClick} color={'red'} iconBtn />
                            </Toolbar>
                        </strong>

                        : null

                        }

                    <Item
                        key={idx}
                        url={item.url}
                        skeletonUrl={skeletonUrl}
                        frameUrl={item.frameUrl}
                        active={(id === item._id) ? 'active' : ''}
                        size={item.size}
                        position={item.position}
                        onClick={onItemClick}
                        _id={item._id}
                    />

                </div>
            </Draggable>

        )
    });

    return (
        <Container url={galleryBackgroundUrl}>
            <ItemContainer>{items}</ItemContainer>
        </Container>
    )
}
