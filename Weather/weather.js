class Weather {
  constructor(city, state) {
    this.apiKey = '75386a3f62msh88492d7d217dbc3p1db6edjsn769ddf1193d3';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://aerisweather1.p.rapidapi.com/sunmoon/ankara,tr/${this.apiKey}/conditions/q/${this.state}CA/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}