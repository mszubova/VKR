<template>
  <div class="mainRoot">
        <div id="homePg">
            <preview-block v-if="pagesVisibility.home"></preview-block>
        </div>
        <div id="portfolioPg">
            <portfolio-page v-if="pagesVisibility.portfolio"></portfolio-page>
        </div>
        <div id="servicesPg">
            <services-page v-if="pagesVisibility.services"></services-page>
        </div>
        <div id="contactPG">
            <contacts-page v-if="pagesVisibility.contacts"></contacts-page>
        </div>
        <div id="aboutPg">
            <about-page v-if="pagesVisibility.about"></about-page>
        </div>
  </div>
</template>

<script>
import PreviewBlock from './functionalComponents/PreviewBlock.vue'
import PortfolioPage from './functionalComponents/PortfolioPage.vue'
import ServicesPage from './functionalComponents/ServicesPage.vue'
import ContactsPage from './functionalComponents/ContactsPage.vue'
import AboutPage from './functionalComponents/AboutPage.vue'
export default {
    data(){
        return{
            pagesVisibility:{
                home: true,
                portfolio: false,
                services: false,
                contacts: false,
                about: false
            },
            onDisplay: 'home'
        }
    },
    components:{
        PreviewBlock,
        PortfolioPage,
        ServicesPage,
        ContactsPage,
        AboutPage
    },
    created: function(){
        this.emitter.on("NewPage", page => {
            this.pagesVisibility[this.onDisplay] = false;
            this.pagesVisibility[page] = true;
            this.onDisplay = page;
        })
    }
}
</script>

<style>
.mainRoot{
    position: relative;
}

</style>