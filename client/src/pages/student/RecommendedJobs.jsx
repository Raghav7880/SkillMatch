import {
    useEffect,
    useState
} from "react";

import api from "../../utils/api";

import JobCard from "../../components/JobCard";

const RecommendedJobs = () => {

    const [jobs, setJobs] =
        useState([]);

    const [loading, setLoading] =
        useState(true);


    useEffect(() => {

        const fetchJobs = async () => {

            try {

                const response =
                    await api.get(
                        "/students/recommended-jobs"
                    );

                setJobs(
                    response.data
                );

            } catch (error) {

                console.error(
                    error
                );

            } finally {

                setLoading(false);
            }
        };

        fetchJobs();

    }, []);


    if (loading) {
        return <h2>Loading...</h2>;
    }


    return (
        <div className="page">

            <h1>
                Recommended Jobs
            </h1>

            {jobs.length === 0 ? (
                <p>
                    No jobs available.
                </p>
            ) : (

                <div className="job-grid">

                    {jobs.map(
                        (job) => (
                            <JobCard
                                key={job._id}
                                job={job}
                            />
                        )
                    )}

                </div>

            )}

        </div>
    );
};

export default RecommendedJobs;