import { fetchContent } from "../services/contentService";
import { Content } from "../types";

// Action types
export const FETCH_CONTENT_REQUEST = "FETCH_CONTENT_REQUEST";
export const FETCH_CONTENT_SUCCESS = "FETCH_CONTENT_SUCCESS";
export const FETCH_CONTENT_FAILURE = "FETCH_CONTENT_FAILURE";
export const SEARCH_CONTENT = "SEARCH_CONTENT";
export const CLOSE_SEARCH = "CLOSE_SEARCH";

// Action creators
export const fetchContentRequest = () => ({
  type: FETCH_CONTENT_REQUEST,
});

export const fetchContentSuccess = (content: Content[]) => ({
  type: FETCH_CONTENT_SUCCESS,
  payload: content,
});

export const fetchContentFailure = (error: boolean) => ({
  type: FETCH_CONTENT_FAILURE,
  payload: error,
});
export const searchItem = (item: string) => ({
  type: SEARCH_CONTENT,
  payload: item,
});

export const closeSearch = () => ({
  type: CLOSE_SEARCH,
});

export const fetchData: any = (page: number) => async (dispatch: any) => {
  try {
    dispatch(fetchContentRequest());
    const data = await fetchContent(page);
    dispatch(fetchContentSuccess(data));
  } catch (error) {
    dispatch(fetchContentFailure(true));
  }
};

export const searchContent: any = (item: string) => (dispatch: any) => {
  dispatch(searchItem(item));
};

export const closeSearchBar: any = () => (dispatch: any) => {
  dispatch(closeSearch());
};
