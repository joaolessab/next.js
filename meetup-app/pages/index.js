// our-domain.com/
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.edublin.com.br/wp-content/uploads/2018/10/castelo-do-dracula-scaled.jpg',
        address: 'Some address 5, 1234 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.edublin.com.br/wp-content/uploads/2018/10/castelo-do-dracula-scaled.jpg',
        address: 'Some address 5, 1234 Some City',
        description: 'This is a second meetup!'
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://www.edublin.com.br/wp-content/uploads/2018/10/castelo-do-dracula-scaled.jpg',
        address: 'Some address 5, 1234 Some City',
        description: 'This is a third meetup!'
    }
];

function HomePage(){
    return (
        <MeetupList meetups={ DUMMY_MEETUPS } />
    );
}

export default HomePage;