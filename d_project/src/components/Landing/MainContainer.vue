<template>
  <div class="mainRoot">
        <preview-block v-if="pagesVisibility.home"></preview-block>
        <portfolio-page v-if="pagesVisibility.portfolio"></portfolio-page>
        <services-page v-if="pagesVisibility.services"></services-page>
        <contacts-page v-if="pagesVisibility.contacts"></contacts-page>
        <about-page v-if="pagesVisibility.about"></about-page>
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
            onDisplay: "home"
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
            this.pagesVisibility[this.onDisplay] = false
            this.pagesVisibility[page] = true
            this.onDisplay = page
        })
    }
}
</script>

<style>
.mainRoot{
    position: relative;
    
}
</style>