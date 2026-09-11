import api from "../utils/api";

const applyForJob = async (
    jobId,
    data
) => {

    const response =
        await api.post(
            `/applications/apply/${jobId}`,
            data
        );

    return response.data;
};


const getMyApplications =
    async () => {

        const response =
            await api.get(
                "/applications/my"
            );

        return response.data;
    };


export default {
    applyForJob,
    getMyApplications
};