<script setup>
  function onTabPress(e) {
    let textarea = e.target;
    let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

    textarea.value = val.substring(0, start) + '\t' + val.substring(end);

    textarea.selectionStart = textarea.selectionEnd = start + 1;
  }
</script>

<template>
  <main>
    <form action="">
      <textarea @keydown.tab.prevent="onTabPress" style="width:100%; height: 300px;">Hello.</textarea>
    </form>
  </main>
</template>