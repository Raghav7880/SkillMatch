import {
    useEffect,
    useState
} from "react";

import {
    Link
} from "react-router-dom";

import api from "../../utils/api";

const ManageJobs = () => {

    const [jobs, setJobs] =
        useState([]);


    const fetchJobs = async () => {

        const response =
            await api.get(
                "/recruiters/jobs"
            );

        setJobs(
            response.data
        );
    };


    useEffect(() => {

        fetchJobs();

    }, []);


    const deleteJob = async (id) => {

        if (
            !window.confirm(
                "Delete this job?"
            )
        ) {
            return;
        }

        await api.delete(
            `/jobs/${id}`
        );

        fetchJobs();
    };


    return (
        <div className="page">

            <h1>
                Manage Jobs
            </h1>

            {jobs.map(job => (

                <div
                    className="job-card"
                    key={job._id}
                >

                    <h3>
                        {job.title}
                    </h3>

                    <p>
                        {job.location}
                    </p>

                    <Link
                        to={`/recruiter/jobs/${job._id}/applicants`}
                    >
                        View Applicants
                    </Link>

                    {" "}

                    <button
                        onClick={() =>
                            deleteJob(
                                job._id
                            )
                        }
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
};

export default ManageJobs;