import { FC, Fragment } from 'react';

const Spinner: FC = () => <Fragment>
  <img src='/images/spinner.gif' alt='Loading...' style={{width: '200px', margin: 'auto', display: 'block'}} />
</Fragment>;

export default Spinner;
