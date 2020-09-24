import { createStore } from '@scripty/react-store';

export default createStore({
    name: 'userStore',
    model: {
        fields: [
            { name: '_id', type: 'string' },
            {
                name: 'imageWalls', type: 'array', default: [
                    {
                        '_id': 'image-wall-1',
                        'layout': 'Layout-1',
                        'images': [
                            {
                                _id: 'x1',
                                size: '40x50',
                                position: {top: 2.4, left:16.39},
                                url: '',
                                active: false
                            },
                            {
                                _id: 'x2',
                                size: '70x100',
                                position: {top: 0, left:31.6},
                                url: '',
                                active: false
                            },
                            {
                                _id: 'x3',
                                size: '50x70',
                                position: {top: 1.5, left:56.6},
                                url: '',
                                active: false
                            },
                            {
                                _id: 'x4',
                                size: '50x70',
                                position: {top: 34.3, left:13.3},
                                url: '',
                                active: false
                            },
                            {
                                _id: 'x5',
                                size: '30x40',
                                position: {top: 58.9, left:31.6},
                                url: '',
                                active: false
                            },
                            {
                                _id: 'x6',
                                size: '21x30',
                                position: {top: 58.8, left:47.6},
                                url: '',
                                active: false
                            },
                            {
                                _id: 'x7',
                                size: '40x50',
                                position: {top: 43, left:56.6},
                                url: '',
                                active: false
                            },
                            {
                                _id: 'x8',
                                size: '30x40',
                                position: {top: 43, left:71.99},
                                url: '',
                                active: false
                            }
                        ]
                    },
                    {
                        '_id': 'image-wall-2',
                        'active': false,
                        'layout': 'Layout-1',
                        'images': {
                            url: '',
                            active: false
                        }
                    },
                ]
            }
        ]
    },
    proxy: {
        rootProperty: 'entries',
        api: {
            read: {
                url: '/users/read',
                method: 'get'
            },
            update: {
                url: '/users/update',
                method: 'post'
            },
            destroy: {
                url: '/users/destroy',
                method: 'post'
            }
        }
    }
});
