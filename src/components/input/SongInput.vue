<template>
  <div id="url-entry-field">
    <input placeholder="https://youtube.com/...">
    <button>Submit</button>
  </div>
</template>

<styles lang="css">
#url-entry-field {
  @apply flex pt-4
}
input {
  @apply bg-slate-100 hover:bg-white rounded-sm text-sm py-1 px-3
}
button {
  @apply font-bold text-sm max-h-10 px-4 rounded-r-sm bg-blue-500 text-white
}
</styles>
