<template>
    <div class="app-contact">
        <div class="row no-gutters in-header" >
            <div class="col-lg-6 d-none d-md-block contact-img" :style="{backgroundImage: 'url('+contactImg+')'}">

            </div>

            <div class="col-lg-6 d-none d-md-block contact-form">
                <div class="empty-space"></div>
                <div class=" px-5 py-5">
                    <h2>Let’s Work Together</h2>
                    <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis non hendrerit placerat, nisi tortor suscipit justo.</p>

                    <form>
                        <div class="form-group">
                            <input type="text" name="name" id="name" class="form-control"
                                v-model.trim="name"
                                v-validate="'required'"
                                data-vv-as="full name"
                                placeholder="Full Name"
                            >
                            <span class="text-danger">{{ errors.first('name') }}</span>
                        </div>

                        <div class="form-group">
                            <input type="text" name="email" id="email" class="form-control"
                                v-model.trim="email"
                                v-validate="'required'"
                                data-vv-as="email"
                                placeholder="Email"
                            >
                            <span class="text-danger">{{ errors.first('email') }}</span>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" name="message" id="message" cols="30" rows="10"
                                v-model.trim="message"
                                v-validate="'required'"
                                data-vv-as="message"
                                placeholder="Message"
                            ></textarea>
                            <span class="text-danger">{{ errors.first('message') }}</span>
                        </div>

                        <div class="form-group">
                            <button class="btn btn-warning px-4" @click.prevent="contactUs($event)">
                                SUBMIT
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <div class="contact-svg" :style="{backgroundImage: 'url('+Svg+')'}"></div>

        <!-- Contact details -->
        <div class="container my-5 pb-5">
            <div class="row">
                <div class="col-12 col-lg-4">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus dolor ad modi quia praesentium.</p>
                </div>

                <div class="col-12 col-lg-4">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus dolor ad modi quia praesentium.</p>
                </div>

                <div class="col-12 col-lg-4">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus dolor ad modi quia praesentium.</p>
                </div>
            </div>
        </div>

        <!-- Map -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9774873225924!2d-0.21137868538967758!3d5.5703459959613655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a0db86ffe2d%3A0x12d7f0d2f819fe1b!2sTribal+House+Studios!5e0!3m2!1ses!2ses!4v1540206978785" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
</template>

<script>
let Svg = require("@/assets/img/Svg.svg");
let contactImg = require("@/assets/img/contactimg.jpg");
export default {
    name: "Contact",
    data() {
        return {
            name: "",
            email: "",
            message: "",
            Svg,
            contactImg
        };
    },
    methods: {
        contactUs(e) {
            let btn = e.currentTarget;

            this.$validator.validateAll().then(result => {
                if (result) {
                }
            });
        }
    }
};
</script>