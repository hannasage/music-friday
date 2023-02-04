<script lang="ts">
  import IntroBox from "./components/display/IntroBox.vue";
  export default {
    components: {
      IntroBox: IntroBox
    }
  }
</script>

<template>
  <div id="app-grid">
    <IntroBox />
  </div>
</template>

<styles lang="css">
#app-grid {
  @apply grid grid-cols-2 md:grid-cols-12
}
</styles>
