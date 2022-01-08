import React, { Fragment, FC } from 'react';
import PropTypes from 'prop-types';

const RepoItem: FC<any> = ({ repo }: any) => {
  return <Fragment>
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  </Fragment>
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
