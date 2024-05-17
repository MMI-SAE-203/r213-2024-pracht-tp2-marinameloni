<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import { RouterLink, RouterView } from 'vue-router/auto'

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/" class="text-pink-300 underline"> Accueil </RouterLink>
        </li>
        <li>
          <RouterLink to="/offres" class="text-pink-300 underline">Toutes les offres</RouterLink>
        </li>
        <li>
          <RouterLink to="/agents" class="text-pink-300 underline">Tous les agents</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>
