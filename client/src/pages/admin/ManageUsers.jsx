const AdminDashboard = () => {

    return (
        <div className="page">

            <h1>
                Admin Dashboard
            </h1>

            <div className="dashboard-grid">

                <div className="dashboard-card">
                    <h2>Users</h2>
                    <p>
                        Manage platform users.
                    </p>
                </div>

                <div className="dashboard-card">
                    <h2>Jobs</h2>
                    <p>
                        Manage job postings.
                    </p>
                </div>

                <div className="dashboard-card">
                    <h2>Companies</h2>
                    <p>
                        Manage companies.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;