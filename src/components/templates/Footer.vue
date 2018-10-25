<template>
    <div class="mt-5">
        <!-- <div class="overlay-footer" :style="{backgroundImage: `url(${footersvg})`}"></div> -->
        <img class="footer-svg" :src="footersvg" width="100%">

        <footer class="main-footer pt-5">
            <div class="container bg-feather py-5 mt-4" :style="{backgroundImage: `url(${feather})`}">
                <div class="row">
                    <div class="col-md-6 col-lg-5 col-xl-4">
                        <img :src="logo" alt="" height="60"> 

                        <div class="info my-4">
                            <p class="text-white">497 Evergreen Rd. Roseville, CA 95673 <br />+44 345 678 903 <br/>adobexd@mail.com</p>
                        </div>

                        <ul class="list-inline text-white mb-3">
                            <li class="list-inline-item pr-3">
                                <a href="#!" class="anchor">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="list-inline-item pr-3">
                                <a href="#!" class="anchor">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li class="list-inline-item pr-3">
                                <a href="#1" class="anchor">
                                    <i class="fab fa-behance"></i>
                                </a>
                            </li>
                        </ul>
                        
                        <p class="text-secondary">© tribalhouse 2018 all rights reserved</p>
                    </div>
                    
                    <div class="col-md-6 col-lg-7 col-xl-8">
                        <div class="d-flex mt-4 justify-content-between">
                            <div></div>
                            <div class="">
                                <ul class="list-inline text-uppercase mb-4">
                                    <li class="list-inline-item">
                                        <router-link to="/" class="anchor">
                                            Home
                                        </router-link>
                                    </li>

                                    <li class="list-inline-item">
                                        <router-link to="/" class="anchor">
                                            Home
                                        </router-link>
                                    </li>

                                    <li class="list-inline-item">
                                        <router-link to="/" class="anchor">
                                            Home
                                        </router-link>
                                    </li>

                                    <li class="list-inline-item">
                                        <router-link to="/" class="anchor">
                                            Home
                                        </router-link>
                                    </li>

                                    <li class="list-inline-item">
                                        <router-link to="/" class="anchor">
                                            Home
                                        </router-link>
                                    </li>
                                </ul>

                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" placeholder="Signup for our newsletter">
                                    <div class="input-group-append">
                                        <button class="btn btn-default" type="button" id="button-addon2">Subscribe</button>
                                    </div>
                                </div>

                                <p class="text-secondary">recieve updates and promotions from tribal house studios</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
let logo = require("@/assets/img/logo.png");
let footersvg = require("@/assets/img/footersvg.svg");
let feather = require("@/assets/img/arrow.png");
export default {
    name: "Footer",
    data() {
        return {
            logo,
            feather,
            footersvg
        };
    }
};
</script>
