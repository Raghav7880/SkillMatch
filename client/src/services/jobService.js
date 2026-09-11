import api from "../utils/api";

const getJobs = async () => {

    const response =
        await api.get("/jobs");

    return response.data;
};


const getJobById = async (id) => {

    const response =
        await api.get(
            `/jobs/${id}`
        );

    return response.data;
};


const createJob = async (jobData) => {

    const response =
        await api.post(
            "/jobs",
            jobData
        );

    return response.data;
};


export default {
    getJobs,
    getJobById,
    createJob
};