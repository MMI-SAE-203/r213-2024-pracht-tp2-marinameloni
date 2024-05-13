<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { pb } from '@/backend';

//{filter:'favori = true',}
const maisonsListe = await pb.collection('maison').getFullList();
</script>

<template>
<MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>

</template>
