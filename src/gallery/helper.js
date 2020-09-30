export const getImageSizes = (imageSize, newImage) => {

    const sizes = {
        '21x30': {
            width: '7.677%',
            top: (newImage) ? '1%' : '10%',
            left: (newImage) ? '1%' : '70%',
            skeletonUrl: 'https://martemedia.ch/wp-content/uploads/2015/06/placeholder-2-500x700.jpg'
        },
        '30x40': {
            width: '14.06%',
            top: (newImage) ? '1%' : '30%',
            left: (newImage) ? '1%' : '70%',
            skeletonUrl: 'https://martemedia.ch/wp-content/uploads/2015/06/placeholder-2-500x700.jpg'
        },
        '40x50': {
            width: '16.39%',
            top: (newImage) ? '1%' : '4%',
            left: (newImage) ? '1%' : '82%',
            skeletonUrl: 'https://martemedia.ch/wp-content/uploads/2015/06/placeholder-2-500x700.jpg'
        },
        '50x70': {
            width: '17.1%',
            top: (newImage) ? '1%' : '4%',
            left: (newImage) ? '1%' : '105%',
            skeletonUrl: 'https://martemedia.ch/wp-content/uploads/2015/06/placeholder-2-500x700.jpg'
        },
        '70x100': {
            width: '23.5%',
            top: (newImage) ? '1%' : '7%',
            left: (newImage) ? '1%' : '37%',
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
