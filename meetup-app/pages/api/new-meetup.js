// api/new/meetup
import { MongoClient } from 'mongodb';

async function handler(req, res){
    if (req.method === 'POST'){ // POST is the only method allowed here
        const data = req.body;

        // You will never want to share this into public folders, but here there's no problem because the user will never see it
        const client = await MongoClient.connect('mongodb+srv://joaolessab:nextjsapp@cluster0.1euve.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db;

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);
        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;