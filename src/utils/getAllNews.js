const getSingleNews = async () => {
    const res = await fetch('https://the-news-portal-server.vercel.app/all-news');
    const data = await res.json();
    return data;
};

export default getSingleNews;
