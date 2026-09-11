import {
    useEffect,
    useState
} from "react";

import api from "../../utils/api";

const StudentProfile = () => {

    const [profile, setProfile] =
        useState({
            phone: "",
            college: "",
            degree: "",
            branch: "",
            graduationYear: "",
            cgpa: "",
            skills: [],
            resume: "",
            profileSummary: ""
        });

    const [skill, setSkill] =
        useState("");


    useEffect(() => {

        const fetchProfile =
            async () => {

                try {

                    const response =
                        await api.get(
                            "/students/profile"
                        );

                    setProfile(
                        response.data
                    );

                } catch (error) {

                    console.error(
                        error
                    );
                }
            };

        fetchProfile();

    }, []);


    const addSkill = () => {

        if (
            skill.trim() &&
            !profile.skills.includes(
                skill.trim()
            )
        ) {

            setProfile({
                ...profile,
                skills: [
                    ...profile.skills,
                    skill.trim()
                ]
            });

            setSkill("");
        }
    };


    const removeSkill = (
        selectedSkill
    ) => {

        setProfile({
            ...profile,
            skills:
                profile.skills.filter(
                    s => s !== selectedSkill
                )
        });
    };


    const updateProfile =
        async (e) => {

            e.preventDefault();

            try {

                await api.put(
                    "/students/profile",
                    profile
                );

                alert(
                    "Profile updated successfully"
                );

            } catch (error) {

                alert(
                    "Profile update failed"
                );
            }
        };


    return (
        <div className="page">

            <h1>
                My Profile
            </h1>

            <form
                onSubmit={
                    updateProfile
                }
            >

                <input
                    placeholder="Phone"
                    value={
                        profile.phone || ""
                    }
                    onChange={e =>
                        setProfile({
                            ...profile,
                            phone:
                                e.target.value
                        })
                    }
                />

                <input
                    placeholder="College"
                    value={
                        profile.college || ""
                    }
                    onChange={e =>
                        setProfile({
                            ...profile,
                            college:
                                e.target.value
                        })
                    }
                />

                <input
                    placeholder="Degree"
                    value={
                        profile.degree || ""
                    }
                    onChange={e =>
                        setProfile({
                            ...profile,
                            degree:
                                e.target.value
                        })
                    }
                />

                <input
                    placeholder="Branch"
                    value={
                        profile.branch || ""
                    }
                    onChange={e =>
                        setProfile({
                            ...profile,
                            branch:
                                e.target.value
                        })
                    }
                />

                <input
                    placeholder="Graduation Year"
                    type="number"
                    value={
                        profile.graduationYear ||
                        ""
                    }
                    onChange={e =>
                        setProfile({
                            ...profile,
                            graduationYear:
                                e.target.value
                        })
                    }
                />

                <input
                    placeholder="CGPA"
                    type="number"
                    step="0.01"
                    value={
                        profile.cgpa || ""
                    }
                    onChange={e =>
                        setProfile({
                            ...profile,
                            cgpa:
                                e.target.value
                        })
                    }
                />


                <div>

                    <input
                        placeholder="Add Skill"
                        value={skill}
                        onChange={e =>
                            setSkill(
                                e.target.value
                            )
                        }
                    />

                    <button
                        type="button"
                        onClick={addSkill}
                    >
                        Add Skill
                    </button>

                </div>


                <div className="skills">

                    {profile.skills?.map(
                        s => (
                            <span
                                key={s}
                                className="skill-badge"
                                onClick={() =>
                                    removeSkill(s)
                                }
                            >
                                {s} ×
                            </span>
                        )
                    )}

                </div>


                <input
                    placeholder="Resume URL"
                    value={
                        profile.resume || ""
                    }
                    onChange={e =>
                        setProfile({
                            ...profile,
                            resume:
                                e.target.value
                        })
                    }
                />


                <textarea
                    placeholder="Profile Summary"
                    value={
                        profile.profileSummary ||
                        ""
                    }
                    onChange={e =>
                        setProfile({
                            ...profile,
                            profileSummary:
                                e.target.value
                        })
                    }
                />


                <button>
                    Save Profile
                </button>

            </form>

        </div>
    );
};

export default StudentProfile;