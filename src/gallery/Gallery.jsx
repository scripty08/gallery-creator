import React, { Fragment, useState } from 'react';

import styled from 'styled-components';
import { Item } from './Item';
import Draggable from 'react-draggable';
import { getImageSizes } from './helper';
import { CloseButton, MoveButton, OkButton } from '@scripty/react-buttons';
import { Toolbar } from '../toolbar/Toolbar';

const Container = styled.div`
  display: inline-block;
  top: 0px;
  right: 0;
  position: absolute;
  width: calc(100% - 305px);
  height: 100vh;
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

const ToolbarContainer = styled.div`
  display: inline-block;
  top: -10px;
  right: -10px;
  opacity: 0.8;
  position: absolute;
  z-index: 5000;
`;

export const Gallery = (props) => {
    const [id, setId] = useState(false)
    const { userData, onClick, galleryBackgroundUrl, onChange } = props;
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
            onChange({ imageWalls });
        };

        const onSaveBtnClick = () => {
            setId(false)
        }

        return (
            <Fragment>
                <Draggable
                    handle="strong"
                    className={'draggableContainer'}
                >

                    <div className="box no-cursor" style={{ position: 'absolute', width: width, left: left, top: top }}>

                        {(id === item._id) ?

                            <strong className="cursor">
                                <ToolbarContainer>
                                    <MoveButton style={{ cursor: 'move' }} color={'#fff'} iconBtn/>
                                    <OkButton onClick={onSaveBtnClick} color={'#12a525'} iconBtn/>
                                    <CloseButton onClick={onCloseBtnClick} color={'red'} iconBtn/>
                                </ToolbarContainer>
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
            </Fragment>
        )
    });

    return (
        <Container url={galleryBackgroundUrl}>
            <Toolbar/>
            <ItemContainer>{items}</ItemContainer>
        </Container>
    )
}
