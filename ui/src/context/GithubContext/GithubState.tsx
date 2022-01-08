import React, { useReducer } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING
} from './GithubTypes';
import GithubReducer from './GithubReducer';
import GithubContext from './GithubContext';

const GithubState: any = (props: any) => {
  const initialState: any = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch]: [any, any] = useReducer(GithubReducer, initialState);

  const searchUsers: (text: string) => void = async text => {
    setLoading();

    const res: AxiosResponse = await axios.get('http://localhost:3000/github/search/users', {
      headers: {
        "Content-Type": "application/json"
      },
      params: { text }
    });
  
    dispatch({
      type: SEARCH_USERS,
      payload: res.data
    });
  };

  const getUser: (username: string) => void = async username => {
    setLoading();

    const res: AxiosResponse = await axios.get('http://localhost:3000/github/search/user', {
      headers: {
        "Content-Type": "application/json",
      },
      params: { username }
    });

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  const getUserRepos: (username: string) => void = async username => {
    setLoading();

    const res: AxiosResponse = await axios.get('http://localhost:3000/github/search/repos', {
      headers: {
        "Content-Type": "application/json"
      },
      params: { username }
    });

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  const clearUsers: (e: any) => void = (e) => dispatch({ type: CLEAR_USERS });

  const setLoading: () => void = () => dispatch({ type: SET_LOADING });

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      getUser,
      getUserRepos,
      clearUsers
    }}
  >
    {props.children}
  </GithubContext.Provider>
};

export default GithubState;
