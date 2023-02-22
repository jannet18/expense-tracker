import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from './firebase';



// reacts Context api - a way to share values between components without having
// to explicitly pass props around from parent to child

const AuthUserContext = createContext({

authUser: null,
isLoading: true

});

export default function useFirebaseAuth() {
    // keep track of the user
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const onAuthStateChanged = async (user) => {
        setIsLoading(true);
        if(!user) {
            setAuthUser(null);
            setIsLoading(false);
            return;
        }
        setAuthUser({
            uid: user.uid,
            email: user.email
        });

        setIsLoading(false);

    };

    useEffect(() => {
    // listen for state changes(log in or out)
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();

    }, []);

    return {
        authUser,
        isLoading
    }
   

}

// to enable the components to consume the variables from the authUser context api
export function AuthUserProvider({children}) {
    const auth = useFirebaseAuth();
    return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>

}

// add a custom hooh to access the current context value , helpful to access authuser and isLoading