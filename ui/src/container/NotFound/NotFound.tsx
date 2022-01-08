import { Fragment, FC } from 'react';

const NotFound: FC = () => {
  return <Fragment>
    <div>
      <h1>Not Found</h1>
      <p className='lead'>The page that you are looking for does not exist...</p>
    </div>
  </Fragment>
};

export default NotFound;
