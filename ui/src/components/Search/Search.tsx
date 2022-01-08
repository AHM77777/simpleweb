import { Fragment, FC, useState, useContext } from 'react';

import Alert from '../../core/Alert/Alert';

import GithubContext from '../../context/GithubContext/GithubContext';
import AlertContext from '../../context/AlertContext/AlertContext';

const Search: FC = () => {
  const github: any = useContext(GithubContext);
  const alert: any = useContext(AlertContext);

  const [text, setText]: [any, any] = useState('');

  const onSubmit: (e: any) => void = (e) => {
    e.preventDefault();
    if (text === '' ) {
      alert.setAlert('Please enter something', 'light');
    } else {
      github.searchUsers(text);
      setText('');
    }
  };

  const onChange: (e: any) => void = (e) => setText(e.target.value);

  return <Fragment>
    <Alert />
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {github.users.length > 0 && (<button onClick={github.clearUsers} className='btn btn-block'>Clear</button>)}
    </div>
  </Fragment>
};

export default Search;