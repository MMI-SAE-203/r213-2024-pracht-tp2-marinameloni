import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase('https://r213.mmeloni.fr:443')

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
export async function allAgents() {
  const records = await pb.collection('agent').getFullList()
  return records
}

export async function id_agent(id) {
  const records = await pb.collection('agent').getOne(`${id}`)
  return records
}




export async function allagentsSorted() {
  const records = await pb.collection('agent').getFullList({
    sort: 'Nom'
  })
  return records
}

export async function getAgentPhoto(id) {
  const agent = await pb.collection('agent').getOne(`${id}`);
  return agent.Photo;
}

export async function addNewMaison(newMaison) {
  await pb.collection('maison').create(newMaison);

}


export async function DeleteMaisonbyId(id){
  await pb.collection('maison').delete(`${id}`);
}

export async function DeleteAgentbyId(id) {
  await pb.collection('agent').delete(`${id}`)
}

export async function UpdateMaisonbyId(id, newMaison){
  await pb.collection('maison').update(`${id}`, newMaison);
}

export async function allMaisonsSortedAgent() {
  const records = await pb.collection('maison').getFullList({
    sort: 'id_agent'
  })
  return records
}

export async function bySurfaceAgent(superficie, agent) {
  const records = await pb.collection('maison').getFullList({
    filter: `surface > '${superficie}' && id_agent = '${agent}'`
  })
  return records
}

export async function maisonFavoriAgent(id) {
  const records = await pb.collection('maison').getFullList({
    filter: `favori = true && id_agent = '${id}'`
  })
  return records
}

