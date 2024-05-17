<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { allagentsSorted, pb } from '@/backend';

const agentsListe = await allagentsSorted()

</script>

<template>

  <ul>
        <li v-for="unAgent of agentsListe" v-bind:key="unAgent.id">
            <RouterLink
            :to="{
                name: '/agents/[id]',
                params: {
                id: unAgent.id
                }
            }"
            class="text-red-400 hover:text-red-600"
            >
            {{ unAgent.Prenom }} {{ unAgent.Nom }}
            </RouterLink>
        </li>
    </ul>

</template>