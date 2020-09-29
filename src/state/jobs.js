import {
    GET_JOBS_START,
    GET_JOBS_SUCCESS,
    GET_JOBS_FAIL,
    POST_JOB_START,
    POST_JOB_SUCCESS,
    POST_JOB_FAIL,
}
    from "./actions"

const initialState = {
    job: {},
    jobs: [],
    error: null,
    loading: false
}

export const jobsReducer = (state = initialState, action) => {
    switch (action) {
        case GET_JOBS_START: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_JOBS_SUCCESS: {
            return {
                ...state,
                loading: false,
                jobs: action.payload
            }
        }
        case GET_JOBS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case POST_JOB_START: {
            return {
                ...state,
                loading: false,
                error: null
            }
        }
        case POST_JOB_SUCCESS: {
            return {
                ...state,
                loading: false,
            }
        }
        case POST_JOB_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: {
            return initialState
        }
    }
}