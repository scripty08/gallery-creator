export const getImageSizes = (imageSize) => {

    const sizes = {
        '21x30': {
            width: '7.677%',
            top: '10%',
            left: '70%',
            skeletonUrl: 'https://martemedia.ch/wp-content/uploads/2015/06/placeholder-2-500x700.jpg'
        },
        '30x40': {
            width: '14.06%',
            top: '30%',
            left: '70%',
            skeletonUrl: 'https://martemedia.ch/wp-content/uploads/2015/06/placeholder-2-500x700.jpg'
        },
        '40x50': {
            width: '16.39%',
            top: '4%',
            left: '82%',
            skeletonUrl: 'https://martemedia.ch/wp-content/uploads/2015/06/placeholder-2-500x700.jpg'
        },
        '50x70': {
            width: '17.1%',
            top: '4%',
            left: '105%',
            skeletonUrl: 'https://martemedia.ch/wp-content/uploads/2015/06/placeholder-2-500x700.jpg'
        },
        '70x100': {
            width: '23.5%',
            top: '7%',
            left: '37%',
            skeletonUrl: 'https://martemedia.ch/wp-content/uploads/2015/06/placeholder-2-500x700.jpg'
        },
    }

    return sizes[imageSize];
}


export const getLayout = () => {
    return {
        'layout-1': {

        }
    }
}
