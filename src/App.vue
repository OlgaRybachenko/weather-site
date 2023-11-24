<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { API_KEY, BASE_URL } from '@/apiCon';
  import WeatherHeader from './components/WeatherHeader.vue';
  import BigBlock from './components/BigBlock.vue';
  import PageContent from './components/PageContent.vue';
  import PageFooter from './components/PageFooter.vue';
  

  const city = ref('Mogilev');
  const weatherInfo = ref(null);

  function getWeather() {
    fetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => weatherInfo.value = data)
  }
  onMounted(getWeather)

   </script>

<template>
 <div class="page">
       <main class="main">
        <div class="container">
          <div class="tablet">
            <div class="sections">
              <section class="section section_left">
                <img src="./assets/imgvue/Logo.png" alt="" class="section-left_logo">
              </section>
              <section class="section_right">
                <div class="info">
                  <div class="city-inner">
                    <input v-model="city" @keyup.enter="getWeather" type="text" class="search">
                  </div>
                  <WeatherHeader :weatherInfo="weatherInfo" />
                </div>
              </section>
              </div>
              <section class="section section-right">
                <BigBlock :weatherInfo="weatherInfo" />
              </section>
              <div v-if="weatherInfo?.weather">
                <PageContent :coord="weatherInfo.coord" />
            <PageFooter :humidity="weatherInfo.main.humidity" />
          </div>
        </div>
        </div>
      </main> 
    </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100%
  padding: 20px 0
  background-color: #000

.tablet
  width: 900px
  height: 100%
  padding: 20px
  background: url('@/assets/imgvue/Frame1.png')
  background-repeat: no-repeat
  background-size: cover

.sections
  display: flex
  width: 100%

  @media (max-width: 767px)
    flex-direction: column

.section_left
  width: 50%
  padding-right: 10px

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

.section-left_logo
  padding-top: 62px
  padding-left: 30px

.section_right
  width: 50%
  padding-left: 10px
  border-radius: 10px
  opacity: 0.6
  background: #907F85

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.city-inner
  width: 100%
  display: flex

  &::after
    content: ''
    position: absolute
    top: 500
    right: 230px
    width: 25px
    height: 25px
    background: url('./assets/imgvue/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer

.info
  height: 100%
  padding: 16px
  background: url('./assets/imgvue/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.search
  width: 100%
  min-width: 300px
  padding: 16px
  font-family: 'Montserrat', sans-serif 
  color: #000
  background-color: #fff
  border-radius: 25px
  border: none
  outline: none
  cursor: pointer
</style>
