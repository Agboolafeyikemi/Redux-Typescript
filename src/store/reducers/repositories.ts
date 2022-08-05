import { Action } from "../actions/index";
import { ActionType } from "../action-types/index";

interface repoState {
  loading: boolean;
  data: string[];
  error: string | null;
}
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: repoState = initialState,
  action: Action
): repoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, data: [], error: null };
    case ActionType.SEARCH_REPO_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
export default reducer;
