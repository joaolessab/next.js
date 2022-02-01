// api/new/meetup
import { MongoClient } from 'mongodb';

function handler(req, res){
    if (req.method === 'POST'){ // POST is the only method allowed here
        const data = req.body;

        const { title, image, address, description } = data;

        // You will never want to share this into public folders, but here there's no problem because the user will never see it
        MongoClient.connect('mongodb+srv://joaolessab:nextjsapp@cluster0.1euve.mongodb.net/meetups?retryWrites=true&w=majority');
    }
}

export default handler;