<template>
    <div class="fake-post-item">
        <!-- <div class="fake-date animated-background mb-3"></div> -->

        <div class="fake-image animated-background mb-3"></div>

        <div class="fake-content animated-background mb-2"></div>
        <div class="fake-content animated-background mb-2"></div>
        <div class="fake-content animated-background mb-2"></div>
    </div>
</template>

<script>
export default {
    name: "BlogPostfakeItem"
};
</script>

<style lang="scss" scoped>
.fake-post-item {
    .fake-date {
        height: 7px;
        width: 30%;
    }
    .fake-image {
        border-radius: 4px;
        height: 400px;
    }

    .fake-content {
        height: 5px;
    }
}
</style>


