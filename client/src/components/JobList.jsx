import JobCard from "./JobCard";

const JobList = ({
    jobs
}) => {

    if (!jobs.length) {
        return (
            <p>
                No jobs found.
            </p>
        );
    }

    return (
        <div className="job-grid">

            {jobs.map(job => (
                <JobCard
                    key={job._id}
                    job={job}
                />
            ))}

        </div>
    );
};

export default JobList;