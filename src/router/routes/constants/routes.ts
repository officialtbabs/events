import { ShuttlersRouteLayout } from '../interfaces/routes';

export const shuttlersRoutes: ShuttlersRouteLayout = {
    home: {
        root: {
            path: '/',
            name: 'Home'
        }
    },
    events: {
        root: {
            path: '/events',
            name: 'Events'
        }
    }
    // create: {
    //     root: {
    //         path: "create",
    //         name: "Create"
    //     }
    // },
    // myEvents: {
    //     root: {
    //         path: "my-events",
    //         name: "MyEvents"
    //     }
    // }
}