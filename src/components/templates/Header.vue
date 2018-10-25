<template>
	<div id="main-nav">
		<!-- <nav class="navbar navbar-expand-lg bg-dark navbar-dark" :class="(scroll) ? 'fixed-top bg-dark-2' : ''"> -->
		<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
			<div class="container">
				<router-link class="navbar-brand" to="/">
					<img :src="logo" alt="" :height="(scroll) ? '30px' : '60px'" >
				</router-link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="mainNavBar">
					 <ul class="navbar-nav ml-auto">
						<li class="nav-item active px-2">
							<router-link class="nav-link" to="/">Home </router-link>
						</li>

						<li class="nav-item active px-2">
							<router-link class="nav-link" to="/about">About Us </router-link>
						</li>

						<li class="nav-item active px-2">
							<router-link class="nav-link" to="/portfolio">Portfolio </router-link>
						</li>

						<li class="nav-item active px-2">
							<router-link class="nav-link" to="/blog">Blog </router-link>
						</li>

						<li class="nav-item active px-2">
							<router-link class="nav-link" to="/contact-us">Contact Us </router-link>
						</li>
					 </ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
let logo = require("@/assets/img/logo.png");

export default {
    name: "Header",
    data() {
        return {
            logo,
            scroll: false
        };
    },
    mounted() {
        let _this = this;
        $(window).scroll(function(event) {
            if ($(window).scrollTop() > 150) {
                _this.scroll = true;
            } else {
                _this.scroll = false;
            }
        });
    }
};
</script>
