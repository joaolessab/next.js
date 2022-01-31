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

export default MeetupDetails;