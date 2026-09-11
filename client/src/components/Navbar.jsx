import {
    Link,
    useNavigate
} from "react-router-dom";

import {
    useAuth
} from "../context/AuthContext";

const Navbar = () => {

    const {
        user,
        logout
    } = useAuth();

    const navigate =
        useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/login");
    };


    return (
        <nav className="navbar">

            <Link
                to="/"
                className="logo"
            >
                SkillMatch
            </Link>

            <div>

                <Link to="/">
                    Home
                </Link>

                {user?.role ===
                    "student" && (
                    <>
                        <Link
                            to="/student/dashboard"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/student/jobs"
                        >
                            Jobs
                        </Link>

                        <Link
                            to="/student/applications"
                        >
                            Applications
                        </Link>
                    </>
                )}

                {user?.role ===
                    "recruiter" && (
                    <>
                        <Link
                            to="/recruiter/dashboard"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/recruiter/post-job"
                        >
                            Post Job
                        </Link>

                        <Link
                            to="/recruiter/jobs"
                        >
                            Manage Jobs
                        </Link>
                    </>
                )}

                {user && (
                    <button
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}

            </div>

        </nav>
    );
};

export default Navbar;