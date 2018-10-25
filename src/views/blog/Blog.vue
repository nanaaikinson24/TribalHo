<template>
    <div class="in-header">
        <div class="blog-bg" :style="{backgroundImage: 'url('+blogimg+')'}">
            <div class="content">
                <h3>{{ title }}</h3>
            </div>
        </div>

        <!-- <div class="blog-svg" :style="{backgroundImage: 'url('+Svg+')'}"></div> -->

        <div class="container" v-if="!isError404">
            <div class="row" v-if="contentLoaded">

                <div class="col-md-8 offset-md-2 blog-post">
                    
                    <div class="post-image shadow-sm">
                        <img :src="blog.image" alt="">
                    </div>

                    <div class="mb-2 mt-5">
                        <small class="secondary-color">{{blog.date_created}}</small>
                    </div>

                    <div class="post-content my-4">
                        <h5 class="post-title">{{ blog.title }}</h5>
                    </div>

                    <div class="post-content mb-5">
                        <p v-html="blog.content"></p>
                    </div>

                    <router-link to="/blog" style="text-decoration: underline;" class="secondary-color">BACK TO BLOG</router-link>
                </div>

            </div>

            <div class="row" v-if="!contentLoaded">
                <div class="col-md-8 offset-md-2">
                    <blog-postfake-item />
                </div>
            </div>
        </div>

        <div class="container" v-if="isError404">
            <div class="row">
                <div class="col-md-8">
                    <error404 />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
let Svg = require("@/assets/img/Svg.svg");
let blogimg = require("@/assets/img/blogimg.jpg");
import Error404 from "@/components/Error404.vue";
import BlogPostfakeItem from "../../components/BlogPostfakeItem.vue";
import axios from "axios";

export default {
    components: {
        Error404,
        BlogPostfakeItem
    },
    name: "Blog",
    metaInfo() {
        return {
            title: this.title
        };
    },
    data() {
        return {
            Svg,
            blogimg,
            blog: {},
            contentLoaded: false,
            isError404: false,
            title: ""
        };
    },
    methods: {
        fetchBlogData() {
            let dash = this.$route.params.blogdash.trim();
            let mask = this.$route.params.blogmask.trim();

            if (!dash && !mask) {
                this.contentLoaded = true;
                this.isError404 = true;
                return false;
            }

            axios
                .get(APIURL + `blog/${dash}/${mask}`)
                .then(response => {
                    this.contentLoaded = true;
                    let res = response.data;

                    if (res.status == 200) {
                        this.blog = res.data;
                        this.title = res.data.title;
                    } else {
                        this.isError404 = true;
                    }
                })
                .catch(err => {});
        }
    },
    created() {
        this.fetchBlogData();
    }
};
</script>
