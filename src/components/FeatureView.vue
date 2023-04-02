<script setup lang="ts">
defineProps({
  blok: Object,
});
</script>

<template>
  <div v-editable="blok" class="py-2 text-blue-500">
    <h1 class="text-lg">{{ blok.name }}</h1>
  </div>
</template>
