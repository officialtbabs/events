import { shuttlersRoutes } from '../constants/routes'
import { default as AppLayout } from '@/layout/AppLayout.vue'

export const eventRoutes = {
    path: shuttlersRoutes.events.root.path,
    component: AppLayout,
    children: [
        {
            path: '',
            name: shuttlersRoutes.events.root.name,
            component : () => import('@/views/events/index.vue')
        }
    ]
}