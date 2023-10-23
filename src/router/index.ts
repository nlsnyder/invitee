import { createRouter, createWebHistory } from 'vue-router';
import ValidateView from '@/views/ValidateView.vue';
import { getItemWithExpiration } from '@/config/localStorage.config';

export const RouteNames = {
    VALIDATE: 'validate',
    INVITE: 'invite',
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: RouteNames.VALIDATE,
            component: ValidateView,
            beforeEnter: (_, __, next) => {
                const isValidated = getItemWithExpiration('validation');
                if (!isValidated) {
                    // User is validated, allow access to the route
                    next();
                } else {
                    // User is not validated, redirect to a different route
                    next({ name: RouteNames.INVITE }); // You should define LOGIN in your RouteNames
                }
            },
        },
        {
            path: '/invite',
            name: RouteNames.INVITE,
            component: () => import('../views/InviteView.vue'),
            beforeEnter: (_, __, next) => {
                const isValidated = getItemWithExpiration('validation');
                if (isValidated) {
                    // User is validated, allow access to the route
                    next();
                } else {
                    // User is not validated, redirect to a different route
                    next({ name: RouteNames.VALIDATE }); // You should define LOGIN in your RouteNames
                }
            },
        },
    ],
});

export default router;
