import { useReducer } from 'react';
import { SET_ALERT, REMOVE_ALERT } from './AlertTypes';
import AlertReducer from './AlertReducer';
import AlertContext from './AlertContext';

const AlertState: any = (props: any) => {
  const initialState: any = null;

  const [state, dispatch]: [any, any] = useReducer(AlertReducer, initialState);

  const setAlert: (msg: string, type: string) => void = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 10000);
  };

  return <AlertContext.Provider
    value={{
      alert: state,
      setAlert
    }}
  >
    {props.children}
  </AlertContext.Provider>
};

export default AlertState;
