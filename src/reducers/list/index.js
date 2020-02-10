import {
    GET_POINTS,
    GET_POINTS_SUCCESS,
    GET_POINTS_FAILURE,
    CHECK_POINT,
    CHECK_POINT_SUCCESS,
    CHECK_POINT_FAILURE,
    EDIT_POINT,
    SAVE_POINT,
    SAVE_POINT_SUCCESS,
    SAVE_POINT_FAILURE,
    ADD_POINT,
    ADD_POINT_SUCCESS,
    ADD_POINT_FAILURE,
    DELETE_POINT,
    DELETE_POINT_SUCCESS,
    DELETE_POINT_FAILURE,
} from './constants';

const initialState = {
    points : {
        payload: [],
        isLoading: false,
        error: false,
    }
};

export default function LoginApp(state = initialState, action) {
    switch (action.type) {
        case GET_POINTS:
            return  { ...state, points: { ...state.points,
                    isLoading: true
            }};
        case GET_POINTS_SUCCESS:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    payload: action.payload
                }
            };
        case GET_POINTS_FAILURE:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    error: action.error
            }};
        case CHECK_POINT:
            return  { ...state, points: { ...state.points,
                    isLoading: true
                }};
        case CHECK_POINT_SUCCESS:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    payload: action.payload
                }};
        case CHECK_POINT_FAILURE:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    error: action.error
                }};
        case EDIT_POINT:
            return  { ...state, points: { ...state.points,
                    payload: action.payload
            }};
        case SAVE_POINT:
            return  { ...state, points: { ...state.points,
                    isLoading: true,
                }};
        case SAVE_POINT_SUCCESS:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    payload: action.payload
                }};
        case SAVE_POINT_FAILURE:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    error: action.error
                }};
        case ADD_POINT:
            return  { ...state, points: { ...state.points,
                    isLoading: true
            }};
        case ADD_POINT_SUCCESS:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    payload: action.payload
                }
            };
        case ADD_POINT_FAILURE:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    error: action.error
            }};
        case DELETE_POINT:
            return  { ...state, points: { ...state.points,
                    isLoading: true
                }};
        case DELETE_POINT_SUCCESS:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    payload: action.payload
                }
            };
        case DELETE_POINT_FAILURE:
            return  { ...state, points: { ...state.points,
                    isLoading: false,
                    error: action.error
                }};
        default:
        {
            return state
        }
    }
}