import api from "../utils/api";

const getProfile = async () => {

    const response =
        await api.get(
            "/students/profile"
        );

    return response.data;
};


const updateProfile = async (
    data
) => {

    const response =
        await api.put(
            "/students/profile",
            data
        );

    return response.data;
};


const getRecommendedJobs =
    async () => {

        const response =
            await api.get(
                "/students/recommended-jobs"
            );

        return response.data;
    };


export default {
    getProfile,
    updateProfile,
    getRecommendedJobs
};