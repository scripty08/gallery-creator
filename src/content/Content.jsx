import React from 'react';
import { Sidebar } from '../sidebar/Sidebar';
import './Content.scss';
import { Gallery } from '../gallery/Gallery';
import { Filter } from '../sidebar/steps/Filter';
import { Layout } from '../Layout';

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
        filter,
        setFilter,
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
                filter={filter}
                setFilter={setFilter}
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
