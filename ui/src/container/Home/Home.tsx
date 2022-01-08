import { Fragment, FC } from 'react';
import Search from '../../components/Search/Search';
import Users from '../../components/Users/Users';

const Home: FC = () => {
  return <Fragment>
    <Search />
    <Users />
  </Fragment>
};

export default Home;
