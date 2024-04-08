//Query 1 is an aggragation of the offesnive and defensive scheme of between the user
// and the offensive and defensive scheme collection.

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$lookup': {
      'from': 'Offensive Scheme', 
      'localField': 'O-Scheme', 
      'foreignField': 'name', 
      'as': 'Offensive Position Value'
    }
  }, {
    '$lookup': {
      'from': 'Defensive Scheme', 
      'localField': 'D-Scheme', 
      'foreignField': 'name', 
      'as': 'Defensive Position Value'
    }
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('Project2').collection('Users');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();