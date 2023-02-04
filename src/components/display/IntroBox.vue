<script lang="ts">
    import SongInput from "../input/SongInput.vue";
    export default {
        components: {
        SongInput: SongInput,
        }
    }
</script>
<template>
    <section id="url-entry-section">
      <p id="url-entry-message">
        Welcome to <b>Music Friday</b>. Paste a YouTube link in the URL box, and click share. 
        It's that easy! Once you have shared, take a moment to browse other playlist
        contributors favorite songs! 
      </p>
      <SongInput />
    </section>
</template>

<styles lang="css">
    #url-entry-section {
      @apply bg-slate-300 text-sm text-zinc-600
      col-span-3 col-start-1 
      p-4 
      md:my-4 md:rounded-md md:col-span-10 md:col-start-2
      lg:col-span-6 lg:col-start-4
    }
</styles>