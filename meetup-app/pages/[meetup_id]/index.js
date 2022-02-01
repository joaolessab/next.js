import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(){
    return (
        <MeetupDetail 
            image="https://www.edublin.com.br/wp-content/uploads/2018/10/castelo-do-dracula-scaled.jpg" 
            title="A First Meetup" 
            address="Some address 5, 1234 Some City" 
            description="This is a first meetup!"
        />
    );
}

export async function getStaticPaths(){ // required to generate dynamic paths pre-rendered
    return {
        fallback: false, // indicates that all supported keys are covered here
        paths: [ // of course, this array will have to be dynamically from the API
            {
                params: {
                    meetup_id: 'm1',
                }
            },
            {
                params: {
                    meetup_id: 'm2',
                }
            }
        ]
    }
}

export async function getStaticProps(context){
    // fetch data for a single meetup
    const meetup_id = context.params.meetup_id;    

    return {
        props: {
            meetupData: {
                id: meetup_id,
                image: 'https://www.edublin.com.br/wp-content/uploads/2018/10/castelo-do-dracula-scaled.jpg',
                title: 'A First Meetup',
                address: 'Some address 5, 1234 Some City',
                description: 'This is a first meetup!'
            }
        }
    }
}

export default MeetupDetails;