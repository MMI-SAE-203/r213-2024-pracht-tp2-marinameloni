<script setup lang="ts">
import type { MaisonRecord } from '@/pocketbase-type'
import MaisonCard from '@/components/MaisonCard.vue'


const maisonsListe:MaisonRecord[] = [
  {
    "adresse": "3 Rue du petit chien",
    "collectionId": "abyuoh3k1hxjurd",
    "collectionName": "maison",
    "created": "2024-04-11 14:08:03.261Z",
    "favori": true,
    "id": "121212121212121",
    "images": [
      "84ff1da3ede305a3646602fdeef757d6f80d2cfd_BgEGpSSt3W.jpg"
    ],
    "nbChambres": 3,
    "nbSdb": 2,
    "nomMaison": "Villa dans le sud",
    "prix": 700000,
    "surface": 140,
    "updated": "2024-04-11 14:20:08.852Z"
  },
  {
    "adresse": "5 Impasse du radiateur",
    "collectionId": "abyuoh3k1hxjurd",
    "collectionName": "maison",
    "created": "2024-04-11 14:10:51.556Z",
    "favori": false,
    "id": "123456789568342",
    "images": [
      "adobe_stock_55289985_1280x855_NEK2U2grri.webp",
      "aesthetically_pleasing_movies_12_6297551ce687d_880_aZLlzJ85yv.jpg"
    ],
    "nbChambres": 2,
    "nbSdb": 1,
    "nomMaison": "Petite maison de campagne",
    "prix": 400000,
    "surface": 90,
    "updated": "2024-04-11 14:10:51.556Z"
  },
  {
    "adresse": "67E Rue de l'étudiant assoiffé",
    "collectionId": "abyuoh3k1hxjurd",
    "collectionName": "maison",
    "created": "2024-04-11 14:12:42.815Z",
    "favori": false,
    "id": "846152548174625",
    "images": [
      "03aec8de_cae9_4a0d_9f5e_b1cfa7a3d0d3_xD97Gt9uJM.jpg",
      "crop_603c5bc3899f1ae2c8aedc6406f58696_26368_650x429_QDENiaqFGo.jpeg"
    ],
    "nbChambres": 1,
    "nbSdb": 1,
    "nomMaison": "Appartement étudiant en ville",
    "prix": 150000,
    "surface": 25,
    "updated": "2024-04-11 14:13:06.722Z"
  },
  {
    "adresse": "1 Chemin du funny member",
    "collectionId": "abyuoh3k1hxjurd",
    "collectionName": "maison",
    "created": "2024-04-11 14:15:10.696Z",
    "favori": true,
    "id": "999999999999999",
    "images": [
      "s_l1200_hEwSaGUiR4.webp"
    ],
    "nbChambres": 10,
    "nbSdb": 8,
    "nomMaison": "Château Cinnamo",
    "prix": 3000000,
    "surface": 5000,
    "updated": "2024-04-11 14:23:51.055Z"
  },
  {
    "adresse": "12 Impasse du bacon",
    "collectionId": "abyuoh3k1hxjurd",
    "collectionName": "maison",
    "created": "2024-04-11 14:19:21.801Z",
    "favori": true,
    "id": "555556364678654",
    "images": [
      "index_hfm6gWPrcY.webp"
    ],
    "nbChambres": 0,
    "nbSdb": 0,
    "nomMaison": "Maison Roblox",
    "prix": 50,
    "surface": 1,
    "updated": "2024-04-11 14:19:21.801Z"
  },
  {
    "adresse": "Rue du koopa troopa",
    "collectionId": "abyuoh3k1hxjurd",
    "collectionName": "maison",
    "created": "2024-04-11 14:22:13.123Z",
    "favori": true,
    "id": "485767685812345",
    "images": [
      "sm3_dl_toad_house_4yyGL9bW36.webp"
    ],
    "nbChambres": 1,
    "nbSdb": 0,
    "nomMaison": "Maison papy champi",
    "prix": 150385,
    "surface": 29,
    "updated": "2024-04-11 14:22:13.123Z"
  }
]

</script>

<template>
  <MaisonCard v-bind="maisonsListe[0]"/>
  <MaisonCard v-bind="maisonsListe[1]"/>
  <MaisonCard v-bind="maisonsListe[2]"/>
  <MaisonCard v-bind="maisonsListe[3]"/>
  <MaisonCard v-bind="maisonsListe[4]"/>

</template>
