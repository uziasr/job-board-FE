import authorizedAxios from "../utils/authorizedAxios"

export const GET_JOBS_START = "GET_JOBS_START"
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS"
export const GET_JOBS_FAIL = "GET_JOBS_FAIL"

export const POST_JOB_START = "POST_JOB_START"
export const POST_JOB_SUCCESS = "POST_JOB_SUCCESS"
export const POST_JOB_FAIL = "POST_JOB_FAIL"

export const SCRAPE_JOB_START = "SCRAPE_JOB_START"
export const SCRAPE_JOB_SUCCESS = "SCRAPE_JOB_SUCCESS"
export const SCRAPE_JOB_FAIL = "SCRAPE_JOB_FAIL"

export const GET_JOB_START = "GET_JOB_START"
export const GET_JOB_SUCCESS = "GET_JOB_SUCCESS"
export const GET_JOB_FAIL = "GET_JOB_FAIL"

export const SET_FILTERS_START = "SET_FILTERS_START"
export const SET_FILTERS_SUCCESS = "SET_FILTERS_SUCCESS"
export const SET_FILTERS_FAIL = "SET_FILTERS_FAIL"

export const GET_STATS_START = "GET_STATS_START"
export const GET_STATS_SUCCESS = "GET_STATS_SUCCESS"
export const GET_STATS_FAIL = "GET_STATS_FAIL"

export const UPDATE_JOB_START = "UPDATE_JOB_START"
export const UPDATE_JOB_SUCCESS = "UPDATE_JOB_SUCCESS"
export const UPDATE_JOB_FAIL = "UPDATE_JOB_FAIL"

export const getJobs = () => dispatch => {
    dispatch({ type: GET_JOBS_START })
    authorizedAxios().get("/job/all")
        .then(res => {
            dispatch({ type: GET_JOBS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_JOBS_FAIL, payload: err }))
}

export const getJobById = (id) => dispatch => {

    dispatch({ type: GET_JOB_START })
    authorizedAxios().get(`/job/${id}`)
        .then(res => dispatch({ type: GET_JOB_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_JOB_FAIL, payload: err }))

}

export const addJob = (job) => dispatch => {
    dispatch({ type: POST_JOB_START })
    authorizedAxios().post("/job/", job)
        .then(res => dispatch({ type: POST_JOB_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_JOB_FAIL, payload: err }))

}

export const scrape = (url, link) => dispatch => {
    dispatch({ type: SCRAPE_JOB_START })
    authorizedAxios().post(`/scrape/${url}`, link)
        .then(res => dispatch({ type: SCRAPE_JOB_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: SCRAPE_JOB_FAIL, payload: err }))
}

export const addFilters = (filters) => dispatch => {
    dispatch({ type: SET_FILTERS_START })
    authorizedAxios().post("/job/filter", filters)
        .then(res => dispatch({ type: SET_FILTERS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: SET_FILTERS_FAIL, payload: err }))
}

export const getStats = () => dispatch => {
    dispatch({ type: GET_STATS_START })
    authorizedAxios().get("/job/stats")
        .then(res => dispatch({ type: GET_STATS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_STATS_FAIL, payload: err }))

}

export const updateJob = (url, update) => dispatch => {
    dispatch({ type: UPDATE_JOB_START, })
    authorizedAxios().patch(`/job/${url}`, update)
        .then(res => dispatch({ type: UPDATE_JOB_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: UPDATE_JOB_FAIL, payload: err }))
}