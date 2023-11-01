const {ObjectId,MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';

async function insertMusic(newMusic) {
    const dbo = await getDB();
    await dbo.collection("Musics").insertOne(newMusic);
}

async function updateMusic(id, nameInput, tuoiInput) {
    const filter = { _id: ObjectId(id) };
    const newValue = { $set: { name: nameInput, tuoi: tuoiInput } };
    const dbo = await getDB ();
    await dbo.collection("musics").updateOne(filter, newValue);
}

async function getMusicById(id) {
    const dbo = await getDB();
    const p = await dbo.collection("musics").findOne({ _id: ObjectId(id) });
    return p;
}

async function deleteMusic(id) {
    const dbo = await getDB();
    await dbo.collection("musics").deleteOne({ "_id": ObjectId(id) });
}
module.exports = {insertMusic,getMusicById,updateMusic,deleteMusic}
