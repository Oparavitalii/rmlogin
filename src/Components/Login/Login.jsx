import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "./index.scss";
import { useDispatch } from "react-redux";
import { setNameUser } from "../../store/createSlice";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientId =
    "414399696868-5kalous0g9i530t2cfp5c09aeq9jtpse.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    dispatch(setNameUser(res.profileObj.name));
    navigate("/characters");
  };
  const onFailure = (res) => {
    console.log(res)
  };
  return (
    <div className="login__google">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
