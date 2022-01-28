import { useRouter } from 'next/router';

function DetailPage(){
    const router = useRouter();
    const news_id = router.query.news_id;

    // send a request to the backend API
    // to fetch the news item with news_id

    console.log(news_id);

    return <h1>The Detail Page</h1>
}

export default DetailPage;