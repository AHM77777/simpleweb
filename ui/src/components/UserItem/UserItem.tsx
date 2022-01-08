import React, { FC, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem: FC<any> = ({ user: { login, avatar_url } }) => {
  return <Fragment>
    <div className='card text-center'>
        <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{width: '60px'}}
        />
        <h3>{login}</h3>

        <div>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                More
            </Link>
        </div>
    </div>
  </Fragment>
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
