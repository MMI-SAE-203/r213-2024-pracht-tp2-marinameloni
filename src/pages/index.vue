<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisons, allMaisonsFavoris, pb } from '@/backend';

//{filter:'favori = true',}
const maisonsListe = await allMaisonsFavoris();
</script>

<template>
<div class="grid grid-cols-3 gap-4">
    <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>
  </div>
</template>
