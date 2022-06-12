<!-- разметка главного компонента -->
<template> 
  <div class="mainRoot">
        <div id="homePg">
            <preview-block v-if="pagesVisibility.home"></preview-block> <!-- стартовая страница -->
        </div>
        <div id="portfolioPg">
            <portfolio-page v-if="pagesVisibility.portfolio"></portfolio-page> <!-- страница портфолио -->
        </div>
        <div id="servicesPg">
            <services-page v-if="pagesVisibility.services"></services-page> <!-- страница услуг -->
        </div>
        <div id="contactPG">
            <contacts-page v-if="pagesVisibility.contacts"></contacts-page> <!-- страница контактов -->
        </div>
        <div id="aboutPg">
            <about-page v-if="pagesVisibility.about"></about-page> <!-- страница о нас -->
        </div>
        <div class="bottomCircle"></div>
    <img class="circles" src="@/assets/circles.png"/>
  </div>
</template>
<!-- скрипт обработки данных компонета -->
<script>
//импорт компонентов для размещения на странице
import PreviewBlock from './functionalComponents/PreviewBlock.vue'
import PortfolioPage from './functionalComponents/PortfolioPage.vue'
import ServicesPage from './functionalComponents/ServicesPage.vue'
import ContactsPage from './functionalComponents/ContactsPage.vue'
import AboutPage from './functionalComponents/AboutPage.vue'
export default {
    data(){
        return{
            pagesVisibility:{ //статус видимости окон
                home: true,
                portfolio: false,
                services: false,
                contacts: false,
                about: false
            },
            onDisplay: 'home'
        }
    },
    components:{ //импортированные компоненты
        PreviewBlock,
        PortfolioPage,
        ServicesPage,
        ContactsPage,
        AboutPage
    },
    created: function(){ //обработка видимости компонентов при смене из меню навигации
        this.emitter.on("NewPage", page => {
            this.pagesVisibility[this.onDisplay] = false;
            this.pagesVisibility[page] = true;
            this.onDisplay = page;
        })
    }
}
</script>
<!-- стилизация компонента -->
<style>
.mainRoot{
    position: relative;
}
img.circles{
    position: fixed;
    top: 50%;
    z-index: -1;
    left: -1%;
}
</style>