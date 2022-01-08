import { FC } from 'react';
import RepoItem from '../RepoItem/RepoItem';

const Repos: FC<any> = ({ repos }: any) => typeof repos == 'object' && (repos.map((repo: any) => <RepoItem key={repo.id} repo={repo} />));

export default Repos;
