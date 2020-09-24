export const getImageSizes = (imageSize) => {

    const sizes = {
        '21x30': {
            width: 91,
            height: 127
        },
        '30x40': {
            width: 170,
            height: 241
        },
        '40x50': {
            width: 172,
            height: 244
        },
        '50x70': {
            width: 204,
            height: 288
        },
        '70x100': {
            width: 290,
            height: 408
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
