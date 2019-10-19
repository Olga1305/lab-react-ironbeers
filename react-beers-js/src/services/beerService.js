import axios from 'axios';

class BeerService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/beers',  
    });
  }

  getAllBeers() {
    return this.axios.get('/')
      .then(({ data: beers }) => beers);
  }

  getOneBeer(id) {
    return this.axios.get(`/${id}`)
      .then(({ data: beer }) => beer);
  }

  createBeer(body) {
    return this.axios.post('/new', body)
      .then(({ data: beer }) => beer);
  }

}

const beerService = new BeerService()

export default beerService;