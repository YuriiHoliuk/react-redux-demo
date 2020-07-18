import { createStore } from 'redux';

// 2. Define possible actions
const ACTION_TYPES = {
  SET_GOODS: 'GOODS::SET',
  SET_ERROR: 'GOODS::SET_ERROR',
  SET_LOADING: 'LOADER::SET_LOADING',
  SET_LOADED: 'LOADER::SET_LOADED',
};

// 1. Model state shape
const initialState = {
  goods: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

// 3. Define state mutations
function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_GOODS: {
      return {
        ...state,
        goods: action.payload,
      };
    }

    case ACTION_TYPES.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case ACTION_TYPES.SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case ACTION_TYPES.SET_LOADED: {
      return {
        ...state,
        isLoaded: action.payload,
      };
    }

    default:
      return state;
  }
}

export const store = createStore(reducer);

export const setGoods = (goods) => ({
  type: ACTION_TYPES.SET_GOODS,
  payload: goods,
});

export const setError = (error) => ({
  type: ACTION_TYPES.SET_ERROR,
  payload: error,
});

export const startLoading = () => ({
  type: ACTION_TYPES.SET_LOADING,
  payload: true,
});

export const stopLoading = () => ({
  type: ACTION_TYPES.SET_LOADING,
  payload: false,
});

export const setIsLoaded = () => ({
  type: ACTION_TYPES.SET_LOADED,
  payload: true,
});
