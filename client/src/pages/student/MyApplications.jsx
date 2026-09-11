import {
    useEffect,
    useState
} from "react";

import api from "../../utils/api";

const MyApplications = () => {

    const [
        applications,
        setApplications
    ] = useState([]);


    useEffect(() => {

        const fetchApplications =
            async () => {

                const response =
                    await api.get(
                        "/applications/my"
                    );

                setApplications(
                    response.data
                );
            };

        fetchApplications();

    }, []);


    return (
        <div className="page">

            <h1>
                My Applications
            </h1>

            {applications.map(
                application => (

                    <div
                        className="application-card"
                        key={
                            application._id
                        }
                    >

                        <h3>
                            {
                                application.job
                                    ?.title
                            }
                        </h3>

                        <p>
                            Match Score:
                            {" "}
                            {
                                application.matchScore
                            }%
                        </p>

                        <p>
                            Status:
                            {" "}
                            {
                                application.status
                            }
                        </p>

                    </div>

                )
            )}

        </div>
    );
};

export default MyApplications;