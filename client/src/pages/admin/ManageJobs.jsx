import {
    useEffect,
    useState
} from "react";

import api from "../../utils/api";

const ManageCompanies = () => {

    const [
        companies,
        setCompanies
    ] = useState([]);


    useEffect(() => {

        const fetchCompanies =
            async () => {

                const response =
                    await api.get(
                        "/admin/companies"
                    );

                setCompanies(
                    response.data
                );
            };

        fetchCompanies();

    }, []);


    return (
        <div className="page">

            <h1>
                Manage Companies
            </h1>

            {companies.map(
                company => (

                    <div
                        className="company-card"
                        key={
                            company._id
                        }
                    >

                        <h3>
                            {
                                company.companyName
                            }
                        </h3>

                        <p>
                            {
                                company.location
                            }
                        </p>

                        <p>
                            {
                                company.industry
                            }
                        </p>

                    </div>

                )
            )}

        </div>
    );
};

export default ManageCompanies;