import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Score = () => import("@/components/Score");
const History = () => import("@/components/History");
const UserProfile = () => import("@/components/User");
const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/score",
        name: "score",
        component: Score,
        meta: {
            layout: "main",
        },
    },
    {
        path: "/history",
        name: "history",
        component: History,
        meta: {
            layout: "main",
        },
    },
    {
        path: "/profile",
        name: "profile",
        component: UserProfile,
        meta: {
            layout: "main",
        },
    },
    {
        path: "/category",
        name: "category",
        meta: {
            layout: "main",
        },
    },
    {
        path: "/recording",
        name: "recording",
        meta: {
            layout: "main",
        },
    },

    {
        path: "/planing",
        name: "planing",
        meta: {
            layout: "main",
        },
    },
    {
        path: "/login",
        name: "login",
        meta: {
            layout: "login",
        },
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
