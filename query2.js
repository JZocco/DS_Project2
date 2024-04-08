//Query 2 does a search of all the players on the market where the player is on
// The New England Patrtiots, and have an overall that is greateater than 85. 
//These players or then sorted by overall decending

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  'Team': 'New England Patriots', 
  'Overall': {
    '$gt': 85
  }
};
const projection = {
  '_id': 0
};
const sort = {
  'Xbox_price': 1
};

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('Project2').collection('All Players');
const cursor = coll.find(filter, { projection, sort });
const result = await cursor.toArray();
await client.close();