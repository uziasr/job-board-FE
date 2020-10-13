import {
    GET_JOBS_START,
    GET_JOBS_SUCCESS,
    GET_JOBS_FAIL,
    POST_JOB_START,
    POST_JOB_SUCCESS,
    POST_JOB_FAIL,
    SCRAPE_JOB_START,
    SCRAPE_JOB_SUCCESS,
    SCRAPE_JOB_FAIL,
    GET_JOB_START,
    GET_JOB_SUCCESS,
    GET_JOB_FAIL,
    SET_FILTERS_START,
    SET_FILTERS_SUCCESS,
    SET_FILTERS_FAIL,
    GET_STATS_START,
    GET_STATS_SUCCESS,
    GET_STATS_FAIL,
    UPDATE_JOB_START,
    UPDATE_JOB_SUCCESS,
    UPDATE_JOB_FAIL,
}
    from "./actions"

const initialState = {
    job: {
        title: "",
        company: "",
        location: "",
        link: "",
        description: "",
        salary: "",
        importance: "",
        status: "",
        date: "",
    },
    jobs: [],
    jobForm: {
        title: "",
        company: "",
        location: "",
        link: "",
        description: "",
        importance: 3,
        status: "applied",
        salary: 0
    },
    stats: {
    },
    jobPostedSuccess: null,
    error: null,
    loading: false,
    jobPostLoading: false,
    jobId: null,
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
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
                jobPostLoading: false,
                error: null,
                jobPostedSuccess: null,
            }
        }
        case POST_JOB_SUCCESS: {
            return {
                ...state,
                jobPostLoading: false,
                jobPostedSuccess: true,
                jobId: action.payload.id
            }
        }
        case POST_JOB_FAIL: {
            return {
                ...state,
                jobPostLoading: false,
                error: action.payload,
                jobPostedSuccess: false
            }
        }
        case SCRAPE_JOB_START: {
            return {
                ...state,
                loading: true,
                error: null,
                jobForm: {
                    title: "",
                    company: "",
                    location: "",
                    link: "",
                    description: "",
                    importance: 3,
                    status: "applied",
                    salary: 0
                }
            }
        }
        case SCRAPE_JOB_SUCCESS: {
            return {
                ...state,
                loading: false,
                jobForm: {
                    ...state.jobForm,
                    ...action.payload
                }
            }
        }
        case SCRAPE_JOB_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case GET_JOB_START: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_JOB_SUCCESS: {
            return {
                ...state,
                loading: false,
                job: action.payload
            }
        }
        case GET_JOB_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case SET_FILTERS_START: {
            return {
                ...state,
                loading: true
            }
        }
        case SET_FILTERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                jobs: action.payload
            }
        }
        case SET_FILTERS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case GET_STATS_START: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_STATS_SUCCESS: {
            return {
                ...state,
                loading: false,
                stats: action.payload
            }
        }
        case GET_STATS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case UPDATE_JOB_START: {
            return {
                ...state,
                // loading: true
            }
        }
        case UPDATE_JOB_SUCCESS: {
            return {
                ...state,
                loading: false,
                job: action.payload
            }
        }
        case UPDATE_JOB_FAIL: {
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