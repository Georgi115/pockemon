class Service {
  async getListPockemon() {
    try {
      const listPockemon = await fetch(" https://api.pokemontcg.io/v1/cards");
      const resultListPockemon = await listPockemon.json();
      return resultListPockemon;
    } catch (error) {
      return Promise.reject();
    }
  }
  async getDetailsPockemon(id) {
    try {
      const detailsPockemon = await fetch(
        `https://api.pokemontcg.io/v1/cards/${id}`
      );
      const resultDetailsPockoemon = await detailsPockemon.json();

      return resultDetailsPockoemon;
    } catch (error) {
      return Promise.reject();
    }
  }
}

export default Service;
