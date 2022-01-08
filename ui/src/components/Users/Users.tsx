import React, { FC, Fragment, useContext, useEffect } from 'react';
import UserItem from '../UserItem/UserItem';
import Spinner from '../../core/Spinner/Spinner';
import GithubContext from '../../context/GithubContext/GithubContext';

const Users: FC = () => {
  const github: any = useContext(GithubContext);

  if (github.loading) return <Spinner />;

  return <Fragment>
    <div style={userStyle}>
      {github && github.users.length > 0 && (github.users.map((user: any) => {
        return <UserItem key={user.id} user={user} />
      }))}
    </div>
  </Fragment>
};

const userStyle: any = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
