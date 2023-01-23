const API_KEY = process.env.API_KEY

const requests =  {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/trending/top_rated/week?api_key=${API_KEY}&language=en-US`
  }
}

export default requests