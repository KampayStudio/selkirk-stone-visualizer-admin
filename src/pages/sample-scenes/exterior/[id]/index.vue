<script setup lang="ts">
import SampleSceneVariantsTable from '@/layouts/components/sample-scenes/SampleSceneVariantsTable.vue';
const type = ref("exterior")
</script>

<template>
  <SampleSceneVariantsTable :type="type" id="$route.params.id" />
</template>
