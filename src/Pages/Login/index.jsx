import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/MainAuth";
import Form from "../../Components/Layouts/MainAuth/Form";
import FormInput from "../../Components/Layouts/MainAuth/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import Button from "../../Components/Elements/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ModalAuth from "../../Components/Modal/ModalAuth";


const users = [
  {
    email: "user1@example.com",
    password: "password123",
    username: "User One",
  },
  {
    email: "user2@example.com",
    password: "password456",
    username: "User Two",
  },
  
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [isNormalLogin, setIsNormalLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // State untuk modal
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    try {
      // Cek pengguna di daftar pengguna statis
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        // Simpan data pengguna ke localStorage
        const loggedInUser = {
          ...data,
          name: user.username,
        };
        localStorage.setItem("authData", JSON.stringify(loggedInUser));
        setIsNormalLogin(true);
        setError(false);
        setModalOpen(true); // Buka modal setelah login berhasil
      } else {
        setError(true); // Jika email atau password salah
      }
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Tutup modal
    navigate("/"); // Navigasi ke halaman utama setelah login
  };

  
  const loggedInUser = JSON.parse(localStorage.getItem("authData"));

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Main classname="h-full py-9">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          textH="Masuk ke Akun"
          textP="Yuk, lanjutin belajarmu di videobelajar."
        >
          <FormInput>
            <InputFieldCommon
              type="email"
              id="email"
              text="Email"
              register={register("email", { required: "Email wajib diisi" })}
              errors={errors}
            />
            <InputFieldPassword
              id="password"
              text="Kata Sandi"
              register={register("password", {
                required: "Kata sandi wajib diisi",
              })}
              errors={errors}
            />
            {error && (
              <p className="text-red-500">
                Email atau kata sandi yang anda masukkan salah.
              </p>
            )}
            <section className="flex flex-col gap-4">
              <Button className="bg-primary-500 hover:bg-green-500 text-white">
                Masuk
              </Button>
              <Button
                className="bg-primary-100 hover:bg-[#e2fcd9] text-primary-500"
                type="button"
                onClick={() => navigate("/register")}
              >
                Daftar
              </Button>
              
            </section>
          </FormInput>
        </Form>

        <ModalAuth
          isOpen={modalOpen}
          onClose={handleCloseModal}
          textH={isNormalLogin ? "Login Berhasil" : "Login Gagal"} 
          textP={`Selamat datang kembali, ${loggedInUser?.name || "User"}`} 
        />
      </Main>
    </div>
  );
};

export default LoginPage;
