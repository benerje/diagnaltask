import {
  FETCH_CONTENT_REQUEST,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILURE,
  SEARCH_CONTENT,
  CLOSE_SEARCH,
} from "../actions/userActions";
import { Content } from "../types";

interface UserState {
  content: Content[];
  searchedContent: Content[];
  loading: boolean;
  error: boolean;
  page: number;
  searchItem: string;
}

const initialState: UserState = {
  content: [],
  loading: false,
  error: false,
  page: 1,
  searchItem: "",
  searchedContent: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CONTENT_REQUEST:
      return { ...state, loading: true, error: false };
    case FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        content: [...state.content, ...action.payload],
        error: false,
        page: state.page + 1,
      };
    case FETCH_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        content: state.content,
        error: action.payload,
      };
    case SEARCH_CONTENT:
      const filteredItems = state.content.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        searchedContent: filteredItems,
        searchItem: action.payload,
      };

    case CLOSE_SEARCH:
      return {
        ...state,
        searchedContent: [],
        searchItem: "",
      };
    default:
      return state;
  }
};

export default userReducer;
