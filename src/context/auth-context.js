import React from "react";

// contexts are basically component wide states
const AuthContext = React.createContext({
	isLoggedIn: false
});

export default AuthContext;