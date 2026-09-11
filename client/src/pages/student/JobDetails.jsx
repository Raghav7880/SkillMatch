import {
    useEffect,
    useState
} from "react";

import {
    useParams
} from "react-router-dom";

import api from "../../utils/api";

const JobDetails = () => {

    const { id } =
        useParams();

    const [job, setJob] =
        useState(null);

    const [coverLetter, setCoverLetter] =
        useState("");


    useEffect(() => {

        const fetchJob =
            async () => {

                try {

                    const response =
                        await api.get(
                            `/jobs/${id}`
                        );

                    setJob(
                        response.data
                    );

                } catch (error) {

                    console.error(
                        error
                    );
                }
            };

        fetchJob();

    }, [id]);


    const apply = async () => {

        try {

            await api.post(
                `/applications/apply/${id}`,
                {
                    coverLetter
                }
            );

            alert(
                "Application submitted successfully"
            );

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Application failed"
            );
        }
    };


    if (!job) {
        return <h2>Loading...</h2>;
    }


    return (
        <div className="page">

            <h1>
                {job.title}
            </h1>

            <h3>
                {job.company?.companyName}
            </h3>

            <p>
                📍 {job.location}
            </p>

            <p>
                Job Type:
                {" "}
                {job.jobType}
            </p>

            <p>
                Experience:
                {" "}
                {job.experience}
            </p>

            <p>
                Salary:
                {" "}
                {job.salary}
            </p>

            <h3>
                Required Skills
            </h3>

            <div className="skills">

                {job.skills?.map(
                    skill => (
                        <span
                            key={skill}
                            className="skill-badge"
                        >
                            {skill}
                        </span>
                    )
                )}

            </div>

            <h3>
                Description
            </h3>

            <p>
                {job.description}
            </p>

            <textarea
                placeholder="Cover Letter"
                value={coverLetter}
                onChange={e =>
                    setCoverLetter(
                        e.target.value
                    )
                }
            />

            <button
                onClick={apply}
            >
                Apply Now
            </button>

        </div>
    );
};

export default JobDetails;