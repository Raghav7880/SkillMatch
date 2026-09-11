import {
    Link
} from "react-router-dom";

const StudentDashboard = () => {

    return (
        <div className="page">

            <h1>
                Student Dashboard
            </h1>

            <div className="dashboard-grid">

                <Link to="/student/profile">
                    <div className="dashboard-card">
                        <h3>
                            My Profile
                        </h3>
                        <p>
                            Update your skills
                            and information.
                        </p>
                    </div>
                </Link>


                <Link to="/student/jobs">
                    <div className="dashboard-card">
                        <h3>
                            Recommended Jobs
                        </h3>
                        <p>
                            Find jobs matching
                            your skills.
                        </p>
                    </div>
                </Link>


                <Link to="/student/applications">
                    <div className="dashboard-card">
                        <h3>
                            My Applications
                        </h3>
                        <p>
                            Track your applications.
                        </p>
                    </div>
                </Link>

            </div>

        </div>
    );
};

export default StudentDashboard;