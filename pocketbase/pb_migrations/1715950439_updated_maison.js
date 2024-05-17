/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("abyuoh3k1hxjurd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4jrqhdkq",
    "name": "id_agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dvy2wwnw9d52xoo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("abyuoh3k1hxjurd")

  // remove
  collection.schema.removeField("4jrqhdkq")

  return dao.saveCollection(collection)
})
