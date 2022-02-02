import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props){
    return (
        <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address} 
            description={props.meetupData.description}
        />
    );
}

export async function getStaticPaths(){ // required to generate dynamic paths pre-rendered
    const uri = 'mongodb+srv://joaolessab:p0dnfmwB1wrAP89o@cluster0.1euve.mongodb.net/meetups?retryWrites=true&w=majority'; 
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();

    return {
        fallback: false, // indicates that all supported keys are covered here
        paths: meetups.map(meetup => ({
            params: { meetup_id: meetup._id.toString()},
        })),
    }
}

export async function getStaticProps(context){
    // fetch data for a single meetup
    const meetup_id = context.params.meetup_id;

    const uri = 'mongodb+srv://joaolessab:p0dnfmwB1wrAP89o@cluster0.1euve.mongodb.net/meetups?retryWrites=true&w=majority'; 
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({ 
        _id: ObjectId(meetup_id)
    });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails;