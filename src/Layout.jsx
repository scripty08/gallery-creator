import React, { Fragment } from 'react';
import { Content } from './content/Content';

export const Layout = (props) => {

    const {
        data,
        onPicturesClick,
        onBackgroundsClick,
        onFramesClick,
        onGalleryItemClick,
        galleryBackgroundUrl,
        onGalleryChange,
        step,
        setStep
    } = props;

    return (
        <Content
            data={data}
            step={step}
            setStep={setStep}
            onBackgroundsClick={onBackgroundsClick}
            onPicturesClick={onPicturesClick}
            onFramesClick={onFramesClick}
            onGalleryItemClick={onGalleryItemClick}
            galleryBackgroundUrl={galleryBackgroundUrl}
            onGalleryChange={onGalleryChange}
        />
    )
}
