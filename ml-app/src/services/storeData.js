const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('capstone-herbalease-655a7832dec0.json')
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'capstone-herbalease',
      keyFilename: pathKey,
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;