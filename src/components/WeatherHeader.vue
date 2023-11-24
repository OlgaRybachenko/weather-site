<script lang="ts" setup>
import { capitalLetter} from'@/method'
  const props = defineProps({
   weatherInfo: {
     type: [Object, null],
     required: true,
   }
  })
 const today = new Date().toLocaleDateString('en-EN', {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'})
</script>

<template>
  <div v-if="weatherInfo?.weather" class="summary" >
    <div class="summary-left" :class="headerClasses">
    <div class="weather">
      <div class="temp">
      {{ Math.round(weatherInfo?.main?.temp) }} °C
     </div>
    <div class="weather-desc text-block">
      {{capitalLetter(weatherInfo?.weather[0].description)}}
     </div>
    </div>
    <div class="city text-block">
      {{ weatherInfo?.name }},
       {{weatherInfo?.sys?.country}}
    </div>
    <div class="date text-block">
    {{ today }}
    </div>
  </div>
    <div
      :style="`background-image: url('./src/assets/imgvue/weather-main/${weatherInfo?.weather[0].description}.png')`"
      class="weather-picture"
    ></div>
    </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.summary
  display: flex
.weather-picture
  width: 144px
  height: 144px
  margin:  20px 
  background-repeat: no-repeat
  background-size: contain

.city
  font-size: 24px

.weather
  margin: 0 0 20px
  padding: 20px 0
  border-bottom: 1px solid rgba(255, 255, 255, 0.4)

.temp
  padding-bottom: 8px
  font-size: 32px

.text-block
  position: relative
  padding-left: 24px
  padding-bottom: 8px
  font-size: 14px

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 20px
    height: 20px
    margin-right: 6px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: contain

.weather-desc

  &::before
    background-image: url('./src/assets/imgvue/weather.svg')

.city

  &::before
    background-image: url('./src/assets/imgvue/location.svg')

.date

  &::before
    left: 2px
    width: 15px
    height: 15px
    background-image: url('./src/assets/imgvue/calendar.svg')
</style>