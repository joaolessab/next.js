// api/new/meetup

function handler(req, res){
    if (req.method === 'POST'){ // POST is the only method allowed here
        const data = req.body;

        const { title, image, address, description } = data;


    }
}

export default handler;