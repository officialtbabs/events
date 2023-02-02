import { shuttlersRoutes } from '../constants/routes';
import { default as AppLayout } from '@/layout/AppLayout.vue';
import { default as MyEventLayout } from '@/layout/my-event-layout/MyEventLayout.vue';

export const eventRoutes = {
    path: shuttlersRoutes.events.root.path,
    component: AppLayout,
    children: [
        {
            path: '',
            name: shuttlersRoutes.events.root.name,
            redirect: './create',
            component: () => import('@/views/events/EventComponent.vue')
        },
        {
            path: 'create',
            name: 'Create',
            component: () => import('@/views/events/create/CreateEventFormComponent.vue')
        },
        {
            path: 'my-events',
            component: MyEventLayout,
            children: [
                {
                    path: '',
                    name: 'MyEvents',
                    component: () => import('@/views/events/my-event/MyEventsComponent.vue')
                },
                {
                    path: 'details',
                    name: 'Details',
                    component: () => import('@/views/events/my-event/details/EventDetailsComponent.vue')
                }
            ]
        }
    ]
}