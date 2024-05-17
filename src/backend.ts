import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Etape 8
export async function allMaisons() {
const records = await pb.collection('maison').getFullList() ;
return records ;
}

// Etape 11
export async function oneID(id) {
  const records = await pb.collection('maison').getOne(`${id}`);
  return records
}

// Etape 12
export async function allMaisonsFavoris() {
  const records = await pb.collection('maison').getFullList(
    { filter: 'favori = true', }
  )
  return records
}

// Etape 13
export async function allMaisonsSorted() {
  const records = await pb.collection('maison').getFullList({
    sort: 'prix',}
  )
  return records
}

// Etape 14
export async function bySurface(surface) {
  const records = await pb.collection('maison').getFullList({
   filter: `surface > ${surface}`,
})
  return records
}

// Etape 15
export async function surfaceORprice(surface, prix) {
  const records = await pb.collection('maison').getFullList({
    filter: `surface > ${surface} || prix < ${prix}`,
})
  return records
}

// Etape 19
export async function agentParID(id) {
  const records = await pb.collection('agent').getOne(`${id}`)
  return records
}