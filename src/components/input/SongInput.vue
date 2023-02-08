<script lang="ts">
import { defineComponent, ref } from "vue";
import { linkStore } from "../../stores/linkStore";

function linkIsValid(link: string): boolean {
  return (
    link.startsWith("https://") &&
    (link.includes("youtube") || link.includes("youtu.be"))
  );
}

function resetLinkInput(): void {
  //TODO: Fix this "'this' implicitly has type 'any' because it does not have a type annotation"
  this.songLink = "";
}

function addLink(link: string): void {
  console.log(`submitted: ${link}`);
  linkIsValid(link)
    ? linkStore.links.push(link)
    : console.log("Not a valid YouTube link");
}

export default defineComponent({
  data() {
    return {
      songLink: "",
    };
  },
  methods: {
    addLink,
  },
});
</script>

<template>
  <div id="url-entry-field">
    <input
      type="text"
      v-model="songLink"
      placeholder="https://youtube.com/..."
    />
    <button v-on:click="addLink(songLink)">Submit</button>
  </div>
</template>

<styles lang="css">
#url-entry-field {
  @apply flex pt-4;
}
input {
  @apply bg-slate-100 hover:bg-white rounded-sm text-sm py-1 px-3;
}
button {
  @apply font-bold text-sm max-h-10 px-4 rounded-r-sm bg-blue-500 text-white;
}
</styles>
