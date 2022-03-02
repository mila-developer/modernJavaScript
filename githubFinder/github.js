class Github {
  constructor() {
    this.client_id = '5df9bafddf6d51bded65';
    this.client_secret = 'a67ffa3780bff3f8532604efa88bb6b369259d0f';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}