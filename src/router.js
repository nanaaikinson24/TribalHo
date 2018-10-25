import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

//imports
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import Posts from "./views/blog/Index.vue";
import Post from "./views/blog/Blog.vue";
import Portfolio from "./views/portfolio/Index.vue";
import About from "./views/about/Index.vue";

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/contact-us",
            name: "Contact",
            component: Contact
        },
        {
            path: "/blog",
            name: "Blog",
            component: Posts
        },
        {
            path: "/blog/:blogdash/:blogmask",
            name: "Post",
            component: Post
        },
        {
            path: "/portfolio",
            name: "Portfolio",
            component: Portfolio
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

/*router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start();
    }
    next();
});

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done();
});*/

export default router;
