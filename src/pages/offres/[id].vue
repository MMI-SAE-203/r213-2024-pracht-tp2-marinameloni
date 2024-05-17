<script setup lang="ts">
  import MaisonCard from '@/components/MaisonCard.vue'

  import { useRoute } from 'vue-router/auto'
  import { oneID } from '@/backend';

  const route = useRoute('/offres/[id]')
  console.log('id :', route.params.id)

  const uneMaison = await oneID(route.params.id);

</script>
<template>
  <div>
    <h1 class="text-xl">Une maison</h1>
    <MaisonCard v-bind="uneMaison"/>
  </div>
</template>