import Button from "../../Elements/Button";
import { useNavigate } from "react-router-dom";

const AuthButtons = () => {
  const navigate = useNavigate();
  
  return (
    <section className="flex flex-col xl:flex-row gap-2 xl:gap-4 p-3 xl:p-0">
      <Button
        className="bg-primary-500 text-white px-6 "
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
      <Button
        className="bg-white text-primary-500 border border-primary-500 px-6"
        onClick={() => navigate("/register")}
      >
        Register
      </Button>
    </section>
  );
};

export default AuthButtons;
