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

function HomePage(props){
    return (
        <MeetupList meetups={ props.meetups } />
    );
}

export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;

    // fetch data from API

    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
    };
}

/*export async function getStaticProps(){
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    };
}*/

export default HomePage;