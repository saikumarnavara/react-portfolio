import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();
  const onSuccess = (response) => {
    navigate("/source");
    localStorage.setItem("user", "LoggedIn");
    window.location.reload();
    console.log("loggedin succesfully", response);
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="931856478274-o7ek1fevrelhis4aibmjuhnjqs7acuuo.apps.googleusercontent.com">
        <GoogleLogin
          //   onSuccess={(credentialResponse) => {
          //     console.log(credentialResponse);
          //   }}
          onSuccess={onSuccess}
          onError={onError}
        >
          Login with google \{" "}
        </GoogleLogin>
      </GoogleOAuthProvider>
    </div>
  );
};
export default SignIn;
