import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import StudentDashboard
    from "./pages/student/StudentDashboard";

import StudentProfile
    from "./pages/student/StudentProfile";

import RecommendedJobs
    from "./pages/student/RecommendedJobs";

import JobDetails
    from "./pages/student/JobDetails";

import MyApplications
    from "./pages/student/MyApplications";

import RecruiterDashboard
    from "./pages/recruiter/RecruiterDashboard";

import CompanyProfile
    from "./pages/recruiter/CompanyProfile";

import PostJob
    from "./pages/recruiter/PostJob";

import ManageJobs
    from "./pages/recruiter/ManageJobs";

import JobApplicants
    from "./pages/recruiter/JobApplicants";

import AdminDashboard
    from "./pages/admin/AdminDashboard";

import ManageUsers
    from "./pages/admin/ManageUsers";

import AdminJobs
    from "./pages/admin/ManageJobs";

import ManageCompanies
    from "./pages/admin/ManageCompanies";

import ProtectedRoute
    from "./components/ProtectedRoute";

const App = () => {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* STUDENT */}

                <Route
                    path="/student/dashboard"
                    element={
                        <ProtectedRoute
                            role="student"
                        >
                            <StudentDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/profile"
                    element={
                        <ProtectedRoute
                            role="student"
                        >
                            <StudentProfile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/jobs"
                    element={
                        <ProtectedRoute
                            role="student"
                        >
                            <RecommendedJobs />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/jobs/:id"
                    element={
                        <ProtectedRoute
                            role="student"
                        >
                            <JobDetails />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/applications"
                    element={
                        <ProtectedRoute
                            role="student"
                        >
                            <MyApplications />
                        </ProtectedRoute>
                    }
                />


                {/* RECRUITER */}

                <Route
                    path="/recruiter/dashboard"
                    element={
                        <ProtectedRoute
                            role="recruiter"
                        >
                            <RecruiterDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/recruiter/company"
                    element={
                        <ProtectedRoute
                            role="recruiter"
                        >
                            <CompanyProfile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/recruiter/post-job"
                    element={
                        <ProtectedRoute
                            role="recruiter"
                        >
                            <PostJob />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/recruiter/jobs"
                    element={
                        <ProtectedRoute
                            role="recruiter"
                        >
                            <ManageJobs />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/recruiter/jobs/:jobId/applicants"
                    element={
                        <ProtectedRoute
                            role="recruiter"
                        >
                            <JobApplicants />
                        </ProtectedRoute>
                    }
                />


                {/* ADMIN */}

                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute
                            role="admin"
                        >
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/users"
                    element={
                        <ProtectedRoute
                            role="admin"
                        >
                            <ManageUsers />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/jobs"
                    element={
                        <ProtectedRoute
                            role="admin"
                        >
                            <AdminJobs />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/companies"
                    element={
                        <ProtectedRoute
                            role="admin"
                        >
                            <ManageCompanies />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
};

export default App;