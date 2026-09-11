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

const Login = () => {

    const navigate =
        useNavigate();

    const { login } =
        useAuth();

    const [form, setForm] =
        useState({
            email: "",
            password: ""
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
                await authService.login(
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
            }

            else if (
                data.user.role ===
                "recruiter"
            ) {
                navigate(
                    "/recruiter/dashboard"
                );
            }

            else {
                navigate(
                    "/admin/dashboard"
                );
            }

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };


    return (
        <div className="auth-container">

            <form
                onSubmit={handleSubmit}
                className="auth-form"
            >

                <h2>
                    Login to SkillMatch
                </h2>

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

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
};

export default Login;