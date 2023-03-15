import React from "react";

import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const navigate = useNavigate();
  const clientId =
    "414399696868-5kalous0g9i530t2cfp5c09aeq9jtpse.apps.googleusercontent.com";
  const onSuccess = (res) => {
    navigate("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
