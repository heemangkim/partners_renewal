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
    path: '/my-page',
    component: MainLayout,
    children: [
      {
        name: 'MyPageView',
        path: '/',
        component: () => import('@/views/myPage/view')
      },
    ]
  },
]

export default paths;