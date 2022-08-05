import { ActionType } from "../action-types";
import { Action } from "../actions";
import axios from "axios";
import { Dispatch } from "redux";

export const searchRepo = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((res: any) => {
        return res.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPO_ERROR,
        payload: err.message,
      });
    }
  };
};
