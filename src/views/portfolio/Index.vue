<template>
    <div class="in-header">
        <div class="bg-video" style="height: 400px;">

        </div>

        <!-- Images -->
        <div class="portfolio-images" v-if="categories.length > 0">
            <div id="js-filters-full-width" class="cbp-l-filters-alignCenter mb-4">
                <div data-filter="*" class="cbp-filter-item-active cbp-filter-item">
                    ALL
                </div>
                <div :data-filter="`.${category.portfolioid}`" class="cbp-filter-item"
                    v-for="(category, i) in categories" :key="i"
                >
                    <span class="text-capitalize">{{ category.name }}</span>
                </div>
                
            </div>

            <div class="empty-space"></div>

            <div id="js-grid-full-width" class="cbp">
                <div class="cbp-item" :class="categoryClasses(porfolio.category)"
                    v-for="(porfolio, i) in portfolio" 
                    :key="i"
                >
                    <a :href="porfolio.image" class="cbp-caption cbp-lightbox" data-title="">
                        <div class="cbp-caption-defaultWrap">
                            <img 
                                :src="porfolio.image" 
                                :data-cbp-src="porfolio.image" 
                                alt="..."
                                height="150" width="200"
                            >
                        </div>
                        <div class="cbp-caption-activeWrap">
                            <div class="cbp-l-caption-alignLeft">
                                <div class="cbp-l-caption-body">
                                    <!-- <div class="cbp-l-caption-title">Dashboard</div>
                                    <div class="cbp-l-caption-desc">by Paul Flavius Nechita</div> -->

                                    <div class="cbp-l-caption-title">
                                        <span v-for="(porfolio, i) in porfolio.category" :key="i">
                                            {{ porfolio.category + ' ' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>

        <div class="empty-space"></div>

        <contact-component />

        <!-- <div class="empty-space"></div> -->
        
    </div>
</template>

<script>
let cubestyle = require("@/assets/css/cubeportfolio.min.css");

import axios from "axios";
import { settings } from "./settings";
import ContactComponent from "@/components/ContactComponent";

export default {
    components: {
        ContactComponent
    },
    name: "Index",
    metaInfo: {
        title: "Portfolio",
        link: [{ rel: "stylesheet", href: cubestyle }]
    },
    data() {
        return {
            categories: [],
            portfolio: []
        };
    },
    methods: {
        fetchPortfolio() {
            axios
                .get(APIURL + "portfolio")
                .then(response => {
                    let res = response.data;
                    this.categories = res;

                    return axios.get(APIURL + "portfolioimages");
                })
                .then(response => {
                    let res = response.data;
                    this.portfolio = res;

                    this.$nextTick(() => {
                        $("#js-grid-full-width").cubeportfolio(settings);
                    });
                });
        },
        categoryFormater(name) {
            return name.split("/").join("-");
        },
        categoryClasses(categoryarr) {
            return categoryarr.map(category => {
                return category.catid + " ";
            });
        }
    },
    created() {
        this.fetchPortfolio();
    }
};
</script>
