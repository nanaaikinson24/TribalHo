<template>
  <div id="app">
    <header-app></header-app>
      <router-view/>
    <footer-app></footer-app>
  </div>
</template>

<script>
import HeaderApp from "@/components/templates/Header";
import FooterApp from "@/components/templates/Footer";
export default {
    components: { HeaderApp, FooterApp },
    name: "App",
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "Tribal House Studios",
        // all titles will be injected into this template
        titleTemplate: "%s | Tribal House Studios"
    }
};
</script>


<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "./assets/fonts.css";
// @import "./assets/css/app.css";
</style>
