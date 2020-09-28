import authorizedAxios from "../utils/authorizedAxios"

export const GET_JOBS_START = "GET_JOBS_START"
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS"
export const GET_JOBS_FAIL = "GET_JOBS_FAIL"

export const getJobs = () => dispatch => {
    dispatch({ type: GET_JOBS_START, })
    authorizedAxios().get("/jobs")
        .then(res => dispatch({ type: GET_JOBS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_JOBS_SUCCESS, payload: err }))
}
