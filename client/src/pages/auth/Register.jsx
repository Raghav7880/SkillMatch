import {
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import authService from "../../services/authService";

import {
    useAuth
} from "../../context/AuthContext";

const Register = () => {

    const navigate =
        useNavigate();

    const { login } =
        useAuth();

    const [form, setForm] =
        useState({
            name: "",
            email: "",
            password: "",
            role: "student"
        });


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]:
                e.target.value
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data =
                await authService.register(
                    form
                );

            login(data);

            if (
                data.user.role ===
                "student"
            ) {
                navigate(
                    "/student/dashboard"
                );
            } else {
                navigate(
                    "/recruiter/dashboard"
                );
            }

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };


    return (
        <div className="auth-container">

            <form
                className="auth-form"
                onSubmit={handleSubmit}
            >

                <h2>
                    Create Account
                </h2>

                <input
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                >
                    <option value="student">
                        Student
                    </option>

                    <option value="recruiter">
                        Recruiter
                    </option>
                </select>

                <button>
                    Register
                </button>

            </form>

        </div>
    );
};

export default Register;