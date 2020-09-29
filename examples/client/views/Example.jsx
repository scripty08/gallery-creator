import React, { Fragment, useEffect, useState } from 'react';
import { useStore } from '@scripty/react-store';
import { Layout } from '../../../src/Layout';

export const Example = () => {
    const [step, setStep] = useState('backgrounds');
    const [activeGalleryItemId, setActiveGalleryItemId] = useState('');
    const [galleryBackgroundUrl, setGalleryBackgroundUrl] = useState('');
    const { imageStore } = useStore('imageStore');
    const { userStore } = useStore('userStore');
    const imageData = imageStore.getAt(0);
    const userData = userStore.getAt(0);

    useEffect(() => {
        imageStore.proxy.read({ category: 'all' });
    }, []);

    const onBackgroundsClick = ({url}) => {
        setGalleryBackgroundUrl(url);
        userStore.setData(userData);
    }

    const onPicturesClick = ({url}) => {
        userData.imageWalls[0].images.map((item) => {
            if (item._id === activeGalleryItemId) {
                item.url = url;
            }
        });
        userStore.setData(userData);
    }

    const onFramesClick = ({url}) => {
        userData.imageWalls[0].images.map((item) => {
            item.frameUrl = url;
        });
        userStore.setData(userData);
    }

    const onGalleryItemClick = ({ _id}) => {
        setActiveGalleryItemId(_id);
    }

    const onGalleryChange = ({ imageWalls }) => {
        imageStore.setData(imageWalls);
    }

    return (
        <Fragment>
            <Layout
                data={{ imageData, userData }}
                step={step}
                setStep={setStep}
                onBackgroundsClick={onBackgroundsClick}
                onPicturesClick={onPicturesClick}
                onFramesClick={onFramesClick}
                onGalleryItemClick={onGalleryItemClick}
                galleryBackgroundUrl={galleryBackgroundUrl}
                onGalleryChange={onGalleryChange}
            />
        </Fragment>
    )

}
