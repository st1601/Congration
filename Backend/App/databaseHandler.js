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

module.exports = {getDB,insertUser,getRole}