import axios, { AxiosResponse } from 'axios';
import { inject, injectable } from 'inversify';

@injectable()
export default class GithubService {
  constructor(
    @inject('APP_GITHUB_CLIENT_ID') private githubClientId: string,
    @inject('APP_GITHUB_CLIENT_SECRET') private githubClientSecret: string
  ) {}

  async searchUsers(text: string): Promise<AxiosResponse> {
    return axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${this.githubClientId}&client_secret=${this.githubClientSecret}`,
      {
        headers: {
          'User-Agent': 'request'
        }
      }
    );
  }

  async searchUser(username: string): Promise<any> {
    const res: AxiosResponse = await axios.get(
      `https://api.github.com/users/${username}?client_id=${this.githubClientId}&client_secret=${this.githubClientSecret}`,
      {
        headers: {
          'User-Agent': 'request'
        }
      }
    );

    // Retrieve all required data for user
    const sources: any = {
      'followers_url': `https://api.github.com/users/${username}/followers?client_id=${this.githubClientId}&client_secret=${this.githubClientSecret}`,
      'following_url': `https://api.github.com/users/${username}/following?client_id=${this.githubClientId}&client_secret=${this.githubClientSecret}`,
      'gists_url': `https://api.github.com/users/${username}/gists?client_id=${this.githubClientId}&client_secret=${this.githubClientSecret}`
    };

    const source_keys: Array<string> = Object.keys(sources);
    let result: any = {};
    source_keys.map(async (key: any) => {
      const data: AxiosResponse = await axios.get(sources[key]);
      result[key] = data.data;
    });

    // Merge all data
    result = {
      ...result,
      ...res.data
    };

    return result;
  }

  async getUserRepos(username: string): Promise<AxiosResponse> {
    return axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${this.githubClientId}&client_secret=${this.githubClientSecret}`,
      {
        headers: {
          'User-Agent': 'request'
        }
      }
    );
  }
}
