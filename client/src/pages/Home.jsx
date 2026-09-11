import {
    Link
} from "react-router-dom";

const Home = () => {

    return (
        <div className="hero">

            <h1>
                Find Jobs That Match
                Your Skills
            </h1>

            <p>
                SkillMatch connects
                students with jobs based
                on their technical skills.
            </p>

            <div>

                <Link to="/register">
                    <button>
                        Get Started
                    </button>
                </Link>

                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default Home;