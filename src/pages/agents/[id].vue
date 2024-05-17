<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router/auto';
import { getAgentPhoto, id_agent } from '@/backend';

const route = useRoute('/agents/[id]');
const unAgent = ref({});
const agentPhoto = ref('');

onMounted(async () => {
  unAgent.value = await id_agent(route.params.id);
  agentPhoto.value = await getAgentPhoto(route.params.id);
});
</script>

<template>
  <div>
    <h1 class="text-xl">Un agent</h1>
    <p>Nom {{ unAgent.Nom }}</p>
    <p>Prénom {{ unAgent.Prenom }}</p>
    <img :src="agentPhoto" alt="photo de l'agent" />
  </div>
</template>