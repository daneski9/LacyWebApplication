import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState} from 'react';
import { auth } from "../../DataBase";

/*TODO:
This page is for testing, to verify signed in or sign out
status
*/


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else{
                setAuthUser(null);
            }
        })
    }, [])
    return 
        <div> { authUser ? <p>Signed In</p> : <p>SignedOut</p>}

        </div>;

    
};
export default AuthDetails;