<template>
    <div class="in-header">
        <div class="blog-bg" :style="{backgroundImage: 'url('+blogimg+')'}">
            <div class="content">
                <h3>Blog</h3>
            </div>
        </div>

        <!-- <div class="blog-svg" :style="{backgroundImage: 'url('+Svg+')'}"></div> -->

        <div class="container blog-posts">
            <div class="row mb-5" v-if="contentLoaded">
                <!-- Posts -->
                <blog-post
                    v-for="(post, i) in posts" :key="i"
                    :blog="post"
                />
            </div>
            

            <!-- Pagination -->
            <div class="row" v-if="pagination.total > posts.length && contentLoaded">
                <div class="col-12">

                    <div>
                        <b-pagination 
                            size="md" 
                            :total-rows="pagination.total" 
                            v-model="currentPage" 
                            :per-page="pagination.perPage"
                            prev-text="Prev"
                            next-text="Next"
                            last-text="Last"
                            first-text="First"
                            align="center"
                        />
                    </div>
                </div>
            </div>

            <!-- Fake item -->
            <div class="row" v-if="!contentLoaded">
                <div class="col-md-6 col-lg-4"
                    v-for="(fake, i) in fakeItems" :key="i"
                >
                    <blog-postsfake-item />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
let Svg = require("@/assets/img/Svg.svg");
let blogimg = require("@/assets/img/blogimg.jpg");
import BlogPost from "@/components/BlogPost";
import BlogPostsfakeItem from "../../components/BlogPostsfakeItem.vue";
import axios from "axios";

export default {
    components: {
        BlogPost,
        BlogPostsfakeItem
    },
    name: "Index",
    metaInfo: {
        title: "Blog"
    },
    data() {
        return {
            Svg,
            blogimg,
            posts: [],
            currentPage: 1,
            pagination: {
                total: 10,
                perPage: 5
            },
            contentLoaded: false,
            fakeItems: 6
        };
    },
    watch: {
        currentPage(next, prev) {
            this.fetchPaginatedData();
        }
    },
    methods: {
        fetchBlogData() {
            let page = 1;
            if (this.$route.query.page) {
                page = this.$route.query.page;
            }
            axios
                .get(APIURL + "blog?page=" + page)
                .then(response => {
                    this.contentLoaded = true;
                    let res = response.data;
                    this.posts = res.data;
                    this.pagination = {
                        total: res.total,
                        perPage: res.limit
                    };
                })
                .catch(err => {});
        },
        fetchPaginatedData() {
            this.$router.push("/blog?page=" + this.currentPage);
            this.fetchBlogData();
        }
    },
    created() {
        this.fetchBlogData();
    }
};
</script>
