import MainLayout from '@/layouts/mainLayout'
import SimpleLayout from '@/layouts/simpleLayout'

const paths = [
  {
    path: '/login',
    component: SimpleLayout,
    children: [
      {
        name: 'Form',
        path: '/',
        component: () => import('@/views/login/index')
      }
    ],
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('@/views/home/index')
      },
    ]
  },
  {
    path: '/my',
    component: MainLayout,
    children: [
      {
        name: 'MyPageView',
        path: '/',
        component: () => import('@/views/myPage/view')
      },
    ]
  },
  {
    path: '/product',
    component: MainLayout,
    children: [
      {
        name: 'ProductList',
        path: '',
        component: () => import('@/views/product/list')
      },
      {
        name: 'ProductDetail',
        path: '/product/detail',
        component: () => import('@/views/product/detail')
      },
      {
        name: 'ProductForm',
        path: '/product/new',
        component: () => import('@/views/product/form')
      },
    ]
  },
]

export default paths;