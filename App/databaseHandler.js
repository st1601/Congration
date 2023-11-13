const {ObjectId,MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';

async function getDB() {
    const client = await MongoClient.connect(url);
    const dbo = client.db("Congration");
    return dbo;
}

//return "-1": invalid; admin or customer
async function getRole(nameInput,pass){
    const dbo = await getDB();
    const s = await dbo.collection("users").findOne({ name: nameInput, pass:pass });
    if(s==null)
        return "-1";
    else
        return s.role;
}

async function insertUser(newUser) {
    const dbo = await getDB();
    await dbo.collection("users").insertOne(newUser);
}

//Paper

async function insertPaper(newPaper) {
    const dbo = await getDB();
    await dbo.collection("Papers").insertOne(newPaper);
}

async function getPaperById(id) {
    const dbo = await getDB();
    const p = await dbo.collection("papers").findOne({ _id: ObjectId(id) });
    return p;
}

async function deletePaper(id) {
    const dbo = await getDB();
    await dbo.collection("papers").deleteOne({ "_id": ObjectId(id) });
}

//Music

async function insertMusic(newMusic) {
    const dbo = await getDB();
    await dbo.collection("Musics").insertOne(newMusic);
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

module.exports = {getDB,insertUser,getRole,insertPaper,getPaperById,deletePaper,insertMusic,getMusicById,deleteMusic}