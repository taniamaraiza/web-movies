import api from '../config'

export const getMovies = async () => {
    const response = await api.get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
    return response.data.results
};

export const getMoviesByName = async (value: string) => {
    const response = await api.get(`/search/movie?include_adult=false&language=en-US&page=1&query=${value}`)
    return response.data.results
};
  