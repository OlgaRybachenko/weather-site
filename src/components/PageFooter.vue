

<script setup lang="ts">
const props = defineProps({
  humidity: {
    type: Number,
    required: true,
  }
})

</script>
<template>
 <section class="section-bottom">
    <div class="block-bottom">
      <div class="block-bottom-inner">
        <div class="block-bottom-pic pic-humidity pic_humidity"><img class="pic_humidity" src="src/assets/imgvue/gusts1.png" alt=""></div>
          <div class="block-bottom-texts">
            <div class="block-bottom-text-block">
              <div class="block-bottom-text-block-title">
                Humidity: {{ humidity }} %
               </div>
               <div class="block-bottom-text-block-desc">
                 Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye.
                  <br /><br />
                The same amount of water vapor results in higher relative humidity in cool air than warm air.
                </div>
              </div>
             </div>
        </div>
      </div>
    </section>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.section-bottom
   width: 100%
   margin-top: 16px
   background: #625564
   opacity: 0.8
   border-radius: 10px

   .pic_humidity
    width: 131px
    height: 131px
    z-index: 100
    background-repeat: no-repeat

</style>