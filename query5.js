//This query gets the most valuable players in a Run Defense by using the Defenses
//Position value number 1 to check all the players on the market that play in that 
//Position.

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$lookup': {
      'from': 'All Players', 
      'localField': 'Position Value #1', 
      'foreignField': 'Position', 
      'as': 'Valuable players'
    }
  }
];

console.log("Top most valuable players for a Run Defense: ")
        answer.forEach((player, index) => {
            console.log('${index + 1}, ${user._id}');
        });

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('Project2').collection('Defensive Scheme');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();