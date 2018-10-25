<template>

    <!-- Contact  -->
    <div class="contact-component mb-5">
        <img class="right mb-5" :src="readySvg"/>

        <div class="container my-5 py-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-md-flex justify-content-md-between align-items-md-center px-5">
                                <div class="flex-fil">
                                    <h4>Ready to join the tribe?</h4>
                                    <p>contact us now and let us work on that awesome project together</p>
                                </div>

                                <router-link class="btn btn-default flex-fil" to="/contact-us">
                                    GET STARTED
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
let readySvg = require("@/assets/img/ready.svg");
export default {
    name: "ContactComponent",
    data() {
        return {
            readySvg
        };
    }
};
</script>
