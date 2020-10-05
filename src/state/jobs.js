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
}
    from "./actions"

const initialState = {
    job: {},
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
    error: null,
    loading: false
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS_START: {
            console.log("ths")
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_JOBS_SUCCESS: {
            console.log("this is action", action)
            return {
                ...state,
                loading: false,
                jobs: action.payload
            }
        }
        case GET_JOBS_FAIL: {
            console.log("this is action 2", action)
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
                error: null,
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
        default: {
            return initialState
        }
    }
}