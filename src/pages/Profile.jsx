import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../providers/AuthProvider";
import Registration from "./Registration";

export default function PersonalProfile() {
    const { user, logout } = useAuth();

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div>
            {user ? (
                <>
                    <h1>שלום {user.firstName}</h1>
                    <div>
                        <div>
                            {isEditing ? (
                                <Registration />
                            ) : (
                                <>
                                    שם פרטי: {user.firstName}<br />
                                    שם משפחה: {user.lastName}<br />
                                    טלפון נייד: {user.mobileNumber}<br />
                                    אימייל: {user.email}<br />
                                    שם משתמש: {user.userName}<br />
                                    סיסמה: {user.password}<br />
                                </>
                            )}
                        </div>
                        <button onClick={handleEdit}>
                            עריכת הפרטים
                        </button>
                        <button onClick={logout}>התנתקות</button>
                    </div>
                </>
            ) : (
                <Link to="/registration">
                    עליך להירשם
                </Link>
            )}
        </div>
    );
}