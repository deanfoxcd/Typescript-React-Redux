import axios from 'axios';
import { ActionType } from '../action-types';
import { Dispatch } from 'react';
import { Action } from '../actions';

export const search_repos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOS });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({ type: ActionType.SEARCH_REPOS_SUCCESS, payload: names });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
