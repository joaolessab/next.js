// api/new/meetup
import { MongoClient } from 'mongodb';

async function handler(req, res){
    if (req.method === 'POST'){ // POST is the only method allowed here
        const data = req.body;

        try{
            const uri = 'mongodb+srv://joaolessab:p0dnfmwB1wrAP89o@cluster0.1euve.mongodb.net/meetups?retryWrites=true&w=majority'; 
            // You will never want to share credentials into public folders, but here there's no problem because the user will never see it
            const client = await MongoClient.connect(uri);
            const db = client.db();

            const meetupsCollection = db.collection('meetups');
            const result = await meetupsCollection.insertOne(data);

            console.log(result);
            client.close();

            res.status(201).json({message: 'Meetup inserted!'});
        }
        catch(error){
            console.log('Error to reach API');
            console.log('Error: ' + error);
        }
    }
}

export default handler;