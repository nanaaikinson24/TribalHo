<template>
    <div class="col-md-6 col-lg-4 mb-3 blog-post-card">
        <div class="post-image mb-3 shadow-sm" @click="navigateToPost(blog.dash, blog.mask)" style="cursor: pointer;">
            <img :src="blog.image" alt="" class="">
        </div>

        <div class="post-content pb-5 pt-2">
            <div class="mb-4 secondary-colors">
                <i class="far fa-clock pr-2"></i> {{ blog.date_created }}
            </div>
            <h5 @click="navigateToPost(blog.dash, blog.mask)" class="title">
                {{ blog.title }}
            </h5>
            <p v-html="blog.content"></p>
            <!-- <p><a href="#!">READ MORE</a></p> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogPost",
    props: ["blog"],
    methods: {
        navigateToPost(dash, mask) {
            this.$router.push(`/blog/${dash}/${mask}`);
        }
    }
};
</script>