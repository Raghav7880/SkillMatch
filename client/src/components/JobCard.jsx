import {
    Link
} from "react-router-dom";

import SkillBadge from "./SkillBadge";
import MatchScore from "./MatchScore";

const JobCard = ({
    job
}) => {

    return (
        <div className="job-card">

            <div className="job-header">

                <div>
                    <h3>
                        {job.title}
                    </h3>

                    <p>
                        {job.company?.companyName}
                    </p>
                </div>

                {job.matchScore !==
                    undefined && (
                    <MatchScore
                        score={
                            job.matchScore
                        }
                    />
                )}

            </div>


            <p>
                📍 {job.location}
            </p>

            <p>
                {job.description}
            </p>


            <div className="skills">

                {job.skills?.map(
                    (skill) => (
                        <SkillBadge
                            key={skill}
                            skill={skill}
                        />
                    )
                )}

            </div>


            <Link
                to={`/student/jobs/${job._id}`}
            >
                View Details
            </Link>

        </div>
    );
};

export default JobCard;