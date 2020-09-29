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

export const getJobs = () => dispatch => {
    dispatch({ type: GET_JOBS_START })
    authorizedAxios().get("/job/all")
        .then(res => {
            console.log(res.data)
            dispatch({ type: GET_JOBS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_JOBS_FAIL, payload: err }))
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