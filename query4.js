//Query 4 checks if the User Roster is a Falcons theme team. To see if this is true
//it checks to see if the number of players on the Atlanta Falcons team is greater
//than 10. If it is then the team is a falcons theme team, and ThemeTeam should be
//true (since this roster has 11 falcons players)

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$match': {
      'Team': 'Atlanta Falcons'
    }
  }, {
    '$count': 'Falcon Players'
  }, {
    '$project': {
      'ThemeTeam': {
        '$cond': {
          'if': {
            '$gte': [
              'Falcon Players', 10
            ]
          }, 
          'then': true, 
          'else': false
        }
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