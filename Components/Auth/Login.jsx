import "./Login.css";
import Description from "./Description";
import Form from "./Form";

function Login() {
  return (
    <div className="container-login">
      <Description />
      <Form isRegister={false} />
    </div>
  );
}

export default Login;
