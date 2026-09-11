import {
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import api from "../../utils/api";

const PostJob = () => {

    const navigate =
        useNavigate();

    const [form, setForm] =
        useState({
            title: "",
            description: "",
            location: "",
            jobType: "Full Time",
            experience: "",
            salary: "",
            skills: "",
            deadline: ""
        });


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]:
                e.target.value
        });
    };


    const submitJob = async (e) => {

        e.preventDefault();

        try {

            const companyResponse =
                await api.get(
                    "/recruiters/company"
                );

            if (!companyResponse.data) {

                alert(
                    "Please create your company profile first."
                );

                return;
            }

            await api.post(
                "/jobs",
                {
                    ...form,
                    company:
                        companyResponse
                            .data
                            ._id,

                    skills:
                        form.skills
                            .split(",")
                            .map(skill =>
                                skill.trim()
                            )
                            .filter(Boolean)
                }
            );

            alert(
                "Job posted successfully"
            );

            navigate(
                "/recruiter/jobs"
            );

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Failed to post job"
            );
        }
    };


    return (
        <div className="page">

            <h1>
                Post New Job
            </h1>

            <form
                onSubmit={submitJob}
            >

                <input
                    name="title"
                    placeholder="Job Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Job Description"
                    value={
                        form.description
                    }
                    onChange={handleChange}
                    required
                />

                <input
                    name="location"
                    placeholder="Location"
                    value={
                        form.location
                    }
                    onChange={handleChange}
                />

                <select
                    name="jobType"
                    value={
                        form.jobType
                    }
                    onChange={handleChange}
                >

                    <option>
                        Full Time
                    </option>

                    <option>
                        Part Time
                    </option>

                    <option>
                        Internship
                    </option>

                    <option>
                        Contract
                    </option>

                </select>

                <input
                    name="experience"
                    placeholder="Experience"
                    value={
                        form.experience
                    }
                    onChange={handleChange}
                />

                <input
                    name="salary"
                    placeholder="Salary"
                    value={
                        form.salary
                    }
                    onChange={handleChange}
                />

                <input
                    name="skills"
                    placeholder="Skills: React, Node.js, MongoDB"
                    value={
                        form.skills
                    }
                    onChange={handleChange}
                    required
                />

                <input
                    type="date"
                    name="deadline"
                    value={
                        form.deadline
                    }
                    onChange={handleChange}
                />

                <button>
                    Post Job
                </button>

            </form>

        </div>
    );
};

export default PostJob;