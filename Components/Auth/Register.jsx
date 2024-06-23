import "./Login.css";
import Description from "./Description";
import Form from "./Form";

function Register() {
  return (
    <div className="container-login">
      <Description />
      <Form isRegister={true} />
    </div>
  );
}

export default Register;
