import {
    useEffect,
    useState
} from "react";

import api from "../../utils/api";

const ManageUsers = () => {

    const [users, setUsers] =
        useState([]);


    useEffect(() => {

        const fetchUsers =
            async () => {

                const response =
                    await api.get(
                        "/admin/users"
                    );

                setUsers(
                    response.data
                );
            };

        fetchUsers();

    }, []);


    return (
        <div className="page">

            <h1>
                Manage Users
            </h1>

            <table>

                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>

                </thead>

                <tbody>

                    {users.map(user => (

                        <tr
                            key={user._id}
                        >

                            <td>
                                {user.name}
                            </td>

                            <td>
                                {user.email}
                            </td>

                            <td>
                                {user.role}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default ManageUsers;