import React from 'react';
import { Sidebar } from '../sidebar/Sidebar';
import './Content.scss';
import { Gallery } from '../gallery/Gallery';
import { Filter } from '../sidebar/steps/Filter';

export const Content = (props) => {

    const {
        data,
        onGalleryItemClick,
        galleryBackgroundUrl,
        onBackgroundsClick,
        onPicturesClick,
        onFramesClick,
        step,
        setStep,
        onGalleryChange
    } = props;

    return (
        <div className={'content-container'}>
            <Sidebar
                imageData={data.imageData}
                onBackgroundsClick={onBackgroundsClick}
                onPicturesClick={onPicturesClick}
                onFramesClick={onFramesClick}
                step={step}
                setStep={setStep}
            />

            <Gallery
                userData={data.userData}
                onClick={onGalleryItemClick}
                galleryBackgroundUrl={galleryBackgroundUrl}
                onChange={onGalleryChange}
            />
        </div>
    )
}
