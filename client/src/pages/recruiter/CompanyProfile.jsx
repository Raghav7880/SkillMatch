import {
    useEffect,
    useState
} from "react";

import api from "../../utils/api";

const CompanyProfile = () => {

    const [form, setForm] =
        useState({
            companyName: "",
            description: "",
            website: "",
            location: "",
            industry: ""
        });


    useEffect(() => {

        const fetchCompany =
            async () => {

                const response =
                    await api.get(
                        "/recruiters/company"
                    );

                if (response.data) {
                    setForm(
                        response.data
                    );
                }
            };

        fetchCompany();

    }, []);


    const submit = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/recruiters/company",
                form
            );

            alert(
                "Company profile saved"
            );

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Failed"
            );
        }
    };


    return (
        <div className="page">

            <h1>
                Company Profile
            </h1>

            <form
                onSubmit={submit}
            >

                <input
                    placeholder="Company Name"
                    value={
                        form.companyName
                    }
                    onChange={e =>
                        setForm({
                            ...form,
                            companyName:
                                e.target.value
                        })
                    }
                    required
                />

                <textarea
                    placeholder="Description"
                    value={
                        form.description
                    }
                    onChange={e =>
                        setForm({
                            ...form,
                            description:
                                e.target.value
                        })
                    }
                />

                <input
                    placeholder="Website"
                    value={
                        form.website
                    }
                    onChange={e =>
                        setForm({
                            ...form,
                            website:
                                e.target.value
                        })
                    }
                />

                <input
                    placeholder="Location"
                    value={
                        form.location
                    }
                    onChange={e =>
                        setForm({
                            ...form,
                            location:
                                e.target.value
                        })
                    }
                />

                <input
                    placeholder="Industry"
                    value={
                        form.industry
                    }
                    onChange={e =>
                        setForm({
                            ...form,
                            industry:
                                e.target.value
                        })
                    }
                />

                <button>
                    Save Company
                </button>

            </form>

        </div>
    );
};

export default CompanyProfile;