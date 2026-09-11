import {
    Link
} from "react-router-dom";

const RecruiterDashboard = () => {

    return (
        <div className="page">

            <h1>
                Recruiter Dashboard
            </h1>

            <div className="dashboard-grid">

                <Link
                    to="/recruiter/company"
                >
                    <div className="dashboard-card">
                        <h3>
                            Company Profile
                        </h3>
                    </div>
                </Link>


                <Link
                    to="/recruiter/post-job"
                >
                    <div className="dashboard-card">
                        <h3>
                            Post Job
                        </h3>
                    </div>
                </Link>


                <Link
                    to="/recruiter/jobs"
                >
                    <div className="dashboard-card">
                        <h3>
                            Manage Jobs
                        </h3>
                    </div>
                </Link>

            </div>

        </div>
    );
};

export default RecruiterDashboard;