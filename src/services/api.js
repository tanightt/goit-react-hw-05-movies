import axios from 'axios';

const API_KEY = '14b7695a61ff3da8a43e5628df685c0c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchMovieList = async () => {
  try {
    const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchMovie = async value => {
  try {
    const res = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${value}&include_adult=false&language=en-US&page=1`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDetails = async id => {
  try {
    const res = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCredits = async id => {
  try {
    const res = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviews = async id => {
  try {
    const res = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
