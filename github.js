class Github {
  constructor(a, b) {
    this.client_id = "d9308aacf8b204d361fd";
    this.client_secret = "84969aeef73956f4ec9e8716d1840532802bb81b";
    this.repos_count = 5;
    this.repos_sort = "create:asc";
    this.url = "https://api.github.com";
  }

  async getUser(username) {
    //to fetch profile info
    let proRes = await fetch(
      `${this.url}/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    //to fetch repository info
    let repoRes = await fetch(
      `${this.url}/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos_count}&sort=${this.repos_sort} `
    );

    let profile = await proRes.json();
    let repos = await repoRes.json();
    return {
      profile,
      repos,
    };
  }
}
