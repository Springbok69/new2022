const {MongoClient} = require('mongodb');

async function main(){

const uri = "mongodb+srv://MikeAdmin:protea9146@cluster0.hkj9l.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);

await client.connect();
await listDatabases({client});

try {
    await client.connect();

    await listDatabases({client});
}  catch (e){
    console.error(e);
}
finally {
    await client.close();
}

}


main().catch(console.error);
/*
============================
 figure this shit out
==============================
*/
