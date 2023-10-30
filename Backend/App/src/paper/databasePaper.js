const {ObjectId,MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';

async function insertPaper(newPaper) {
    const dbo = await getDB();
    await dbo.collection("Papers").insertOne(newPaper);
}

async function getPaperById(id) {
    const dbo = await getDB();
    const s = await dbo.collection("papers").findOne({ _id: ObjectId(id) });
    return s;
}

async function deletePaper(id) {
    const dbo = await getDB();
    await dbo.collection("papers").deleteOne({ "_id": ObjectId(id) });
}
module.exports = {getDB,insertPaper,getPaperById,deletePaper}
