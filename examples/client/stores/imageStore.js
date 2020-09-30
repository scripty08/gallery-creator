import { createStore } from '@scripty/react-store';

export default createStore({
    name: 'imageStore',
    model: {
        fields: [
            { name: 'category', type: 'object', default: 'all' },
            { name: 'frames', type: 'array', default: [
                    {
                        '_id': 'frame-0',
                        'title': 'frame 0',
                        'width': 200,
                        'height': 345,
                        'url': 'https://desenio.se/bilder/artiklar/AASP-50104.jpg',
                    },
                    {
                        '_id': 'frame-1',
                        'title': 'frame 1',
                        'width': 200,
                        'height': 345,
                        'url': 'https://desenio.se/bilder/artiklar/AAVP50112.jpg',
                    },
                    {
                        '_id': 'frame-2',
                        'title': 'frame 2',
                        'width': 200,
                        'height': 345,
                        'url': 'https://desenio.se/bilder/artiklar/AAEP50118.jpg',
                    },
                    {
                        '_id': 'frame-3',
                        'title': 'frame 3',
                        'width': 200,
                        'height': 345,
                        'url': 'https://desenio.se/bilder/artiklar/9013-5070.jpg',
                    },
                    {
                        '_id': 'frame-4',
                        'title': 'frame 4',
                        'width': 200,
                        'height': 345,
                        'url': 'https://desenio.se/bilder/artiklar/9022-5070.jpg',
                    },
                ]
            },
            { name: 'backgrounds', type: 'array', default: [
                    {
                        '_id': 'background-0',
                        'title': 'background 0',
                        'width': 345,
                        'height': 211,
                        'url': 'https://desenio.de/includes/tavelvagg/backgrounds/4-grey.jpg',
                    },
                    {
                        '_id': 'background-1',
                        'title': 'background 1',
                        'width': 345,
                        'height': 211,
                        'url': 'https://desenio.de/includes/tavelvagg/backgrounds/5-grey.jpg',
                    },
                    {
                        '_id': 'background-2',
                        'title': 'background 2',
                        'width': 345,
                        'height': 211,
                        'url': 'https://desenio.de/includes/tavelvagg/backgrounds/7-grey.jpg',
                    },
                    {
                        '_id': 'background-3',
                        'title': 'background 3',
                        'width': 345,
                        'height': 211,
                        'url': 'https://desenio.de/includes/tavelvagg/backgrounds/8-grey.jpg',
                    },
                    {
                        '_id': 'background-4',
                        'title': 'background 4',
                        'width': 345,
                        'height': 211,
                        'url': 'https://desenio.de/includes/tavelvagg/backgrounds/10-grey.jpg',
                    },
                ]
            },
            {
                name: 'images', type: 'array', default: [
                    {
                        '_id': 'image-0',
                        'title': 'image 0',
                        'url': 'https://1369994046.rsc.cdn77.org//bilder/artiklar/10990.jpg?m=1533106849',
                        'price': '14,99',
                    },
                    {
                        '_id': 'image-1',
                        'title': 'image 1',
                        'url': 'https://1369994046.rsc.cdn77.org//bilder/artiklar/11792.jpg?m=1544688215',
                        'price': '19,99',
                    },
                    {
                        '_id': 'image-2',
                        'title': 'image 2',
                        'url': 'https://1369994046.rsc.cdn77.org//bilder/artiklar/3393.jpg?m=1510646482',
                        'price': '29,99',
                    },
                    {
                        '_id': 'image-3',
                        'title': 'image 3',
                        'url': 'http://localhost:3014/images/hijab.jpg',
                        'price': '13,99',
                    },
                    {
                        '_id': 'image-3',
                        'title': 'image 3',
                        'url': 'http://localhost:3014/images/arabic1.jpg',
                        'price': '13,99',
                    },
                    {
                        '_id': 'image-3',
                        'title': 'image 3',
                        'url': 'http://localhost:3014/images/arabic2.jpg',
                        'price': '13,99',
                    }
                ]
            }
        ]
    },
    proxy: {
        rootProperty: 'entries',
        api: {
            read: {
                url: '/images/read',
                method: 'get'
            },
            update: {
                url: '/images/update',
                method: 'post'
            },
            destroy: {
                url: '/images/destroy',
                method: 'post'
            }
        }
    }
});
