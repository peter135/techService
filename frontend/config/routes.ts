
export default  [
    {
        path: '/',
        component: '../layouts/basicLayout',
        routes: [
            {
                path: '/',
                redirect: '/home',
            },
            {
                path: '/home',
                component: '../pages/home/home',
            },
            {
                path: '/products',
                component: '../pages/products/products',
            },
            {
                path: '/about',
                component: '../pages/about/about',
            },

         ]
    },
    {
        path: '/productDetail',
        component: '../pages/productDetail/productDetail',
    },
    {
        path: '/login',
        component: '../pages/login/login',
    },
    {
        path: '/books',
        component: '../pages/books/books',
    },
    {
        path: '/books/add',
        component: '../pages/books/add',
    },
    {
        path: '/books/update',
        component: '../pages/books/update',
    },

]
