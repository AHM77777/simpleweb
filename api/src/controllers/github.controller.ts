import { controller, httpGet, queryParam, BaseHttpController } from 'inversify-express-utils';
import { inject } from 'inversify';

import GithubService from '../services/github.service';

@controller('/github')
export class GithubController extends BaseHttpController {
  constructor(
    @inject(GithubService) private githubService: GithubService
  ) {
    super();
  }

  @httpGet('/search/users')
  async searchUsers(@queryParam('text') text: string) {
    try {
      return this.ok((await this.githubService.searchUsers(text)).data.items);
    } catch (e) { 
      console.log(`There was an error retrieving users: Error: ${e}`);
    }
  }

  @httpGet('/search/user')
  async searchUser(@queryParam('username') username: string) {
    try {
      return this.ok((await this.githubService.searchUser(username)));
    } catch (e) {
      console.log(`There was an error retrieving the user: Error: ${e}`);
    }
  }

  @httpGet('/search/repos')
  async searchRepos(@queryParam('username') username: string) {
    try {
      return this.ok((await this.githubService.getUserRepos(username)).data);
    } catch (e) {
      console.log(`There was an error retrieving the user repos: Error: ${e}`);
    }
  }
}
