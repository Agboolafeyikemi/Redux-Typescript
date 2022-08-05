import { ActionType } from "../action-types/index";

interface SearchRepo {
  type: ActionType.SEARCH_REPO;
}
interface SearchRepoSuccess {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}
interface SearchRepoError {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}
export type Action = SearchRepo | SearchRepoSuccess | SearchRepoError;
