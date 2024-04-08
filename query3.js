//This query gets the net value of the Users roster.

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$group': {
      '_id': null, 
      'totalXboxPrice': {
        '$sum': '$Xbox_price'
      }
    }
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('Project2').collection('User Roster');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();