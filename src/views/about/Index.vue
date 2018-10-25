<template>
  <div class="in-header">
    <div class="about-bg" :style="{backgroundImage: 'url('+aboutImg+')'}">
        <div class="content">
            <h3>{{ title }}</h3>
        </div>
      </div>

      <div class="about-svg" :style="{backgroundImage: 'url('+aboutSvg+')'}"></div>

      <!-- About Text -->
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 offset-md-3">
            <h3 class="text-center">Who We Are</h3>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis non hendrerit placerat, nisi tortor suscipit justo, nec fringilla lectus odio quis tellus. Donec vel commodo justo, non egestas ligula. Cras gravida mollis tortor, molestie ultrices nisl imperdiet sit amet. Quisque nisi diam, molestie sit amet neque id, imperdiet sagittis eros. Vivamus tincidunt augue nunc, in convallis lacus ullamcorper a.</p>
          </div>
        </div>
      </div>

      <div class="empty-space"></div>

      <!-- We are -->
      <div class="about-svg-right">
        <img :src="aboutSvg2" alt="..." class="right">
      </div>

      <!--  -->
      <div class="container ">
        <div class="row">
          <div class="col-md-6">
            <h3>What We Are All About</h3>
            <div>
              <p><b>Lorem ipsum dolor sit amet</b></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis non hendrerit placerat, nisi tortor suscipit justo, nec fringilla lectus odio quis tellus. </p>
            </div>

            <div>
              <p><b>Lorem ipsum dolor sit amet</b></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis non hendrerit placerat, nisi tortor suscipit justo, nec fringilla lectus odio quis tellus. </p>
            </div>

            <div>
              <p><b>Lorem ipsum dolor sit amet</b></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis non hendrerit placerat, nisi tortor suscipit justo, nec fringilla lectus odio quis tellus. </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="pt-5 pl-5">
                <img :src="aboutImg2" class="shadow-sm " height="300px">
            </div>
          </div>
        </div>
      </div>

      <div class="empty-space"></div>

      <div class="about-svg-left">
        <img :src="aboutSvg3" alt="" class="left">

        <div class="container">
          <div class="row">
            <div class="col-12 mt-5">
              <h4 class="text-white">Core Values</h4>
              <p class="text-white">Lorem ipsum dolor sit amet</p>
            </div>
            <div class="col-12">
              <div class="core-values-slider">
                <div class="slider-item" :style="{backgroundImage: 'url('+slider+')'}">
                  <div class="slider-overlay d-flex justify-content-between">
                    <div></div>
                    <div class="pr-5 d-flex justify-content-center flex-column">
                      <p class="display-1 number d-block text-right">01</p>
                      <p class="secondary-yellow text-right">Lorem ipsum dolor sit amet<br> consectetur adipiscing elit. Morbi</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="empty-space"></div>

      <!-- Team -->
      <div class="my-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h3 class="text-center mb-5">THE TEAM</h3>

              <div class="team-members">
                <div class="row no-gutters">

                  <div class="col-md-6 col-lg-4"
                    v-for="(member, i) in members" :key="i"
                  >
                    <div class="card-member">
                      <div class="team-member" :style="{backgroundImage: 'url('+member.image+')'}"></div>
                      <div class="overlay px-3 py-3">
                        <h6 class="secondary-yellow">{{ member.name }}</h6>
                        <h4 class="text-uppercase" style="color: rgba(160, 160, 160, 1)">
                          {{ member.position }}
                        </h4>
                      </div>
                      
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="empty-space"></div>

      <!-- Contact component -->
      <contact-component />

  </div>
</template>

<script>
let aboutImg = require("@/assets/img/about.jpg");
let bibilabinga = require("@/assets/img/bibilabinga.png");
let slider = require("@/assets/img/slider/about/slider.jpg");
let aboutImg2 = require("@/assets/img/about-2.jpg");
let aboutSvg = require("@/assets/img/aboutsvg.svg");
let aboutSvg2 = require("@/assets/img/about-2.svg");
let aboutSvg3 = require("@/assets/img/about-3.svg");
import ContactComponent from "@/components/ContactComponent";

import axios from "axios";

export default {
    components: {
        ContactComponent
    },
    name: "Index",
    data() {
        return {
            bibilabinga,
            slider,
            aboutSvg,
            aboutSvg2,
            aboutSvg3,
            aboutImg,
            aboutImg2,
            title: "About Us",
            members: []
        };
    },
    metaInfo: {
        title: "About"
    },
    methods: {
        fetchMembers() {
            axios
                .get(APIURL + "members")
                .then(response => {
                    let res = response.data;
                    this.members = res;
                })
                .catch(err => {});
        }
    },
    created() {
        this.fetchMembers();
    }
};
</script>
