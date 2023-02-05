import { shuttlersRoutes } from '../constants/routes'
import { default as AppLayout } from '@/layout/AppLayout.vue'

export const homeRoutes = {
    path: shuttlersRoutes.home.root.path,
    component: AppLayout,
    children: [
        {
            path: '',
            name: shuttlersRoutes.home.root.name,
            component: () => import('@/views/index.vue')
        }
    ]
}