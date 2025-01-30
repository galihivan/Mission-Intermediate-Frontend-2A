import Navbar from "../../Components/Layouts/Navbar";
import Main from "../../Components/Layouts/MainAuth";
import Form from "../../Components/Layouts/MainAuth/Form";
import FormInput from "../../Components/Layouts/MainAuth/FormInput";
import InputFieldCommon from "../../Components/Elements/InputField";
import InputFieldPassword from "../../Components/Elements/InputField/InputFieldPassword";
import InputFieldPhone from "../../Components/Elements/InputField/InputFieldPhone";
import Button from "../../Components/Elements/Button";
import { useForm } from "react-hook-form";
import authData from "../../Data/authData.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalAuth from "../../Components/Modal/ModalAuth";
import InputSelect from "../../Components/Elements/InputSelect";

const RegisterPage = () => {
  const navigate = useNavigate();
  const country = authData[0].country;
  const [modalOpen, setModalOpen] = useState(false);
  const [isNormalRegister, setIsNormalRegister] = useState(false);

  // Handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // Simulasi Pendaftaran
  const onSubmit = async (data) => {
    try {
      const fullPhone = data.country + data.phone;
      const countryName = country.find((c) => c.code === data.country).country;
      const finalData = { ...data, phone: fullPhone, countryName };
      delete finalData["confirm-password"];
      delete finalData["country"];

      // Simulasi pengecekan email
      const isEmailExist = localStorage.getItem(finalData.email);
      if (isEmailExist) {
        throw new Error("Email sudah terdaftar");
      } else {
        // Simulasi pendaftaran
        localStorage.setItem(finalData.email, JSON.stringify(finalData));
        setIsNormalRegister(true);
        setModalOpen(true);
      }
    } catch (error) {
      console.error("Error pada saat registrasi: ", error);
      alert(error.message);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    {isNormalRegister ? navigate("/login") : navigate("/")}
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Main className="h-auto py-16">
        <Form
          textH="Pendaftaran Akun"
          textP="Yuk, daftarkan akunmu sekarang juga!"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput>
            <InputFieldCommon
              type="text"
              id="username"
              text="Nama Lengkap"
              register={{
                ...register("username", {
                  required: "Nama lengkap wajib diisi",
                }),
              }}
              errors={errors}
            />
            <InputFieldCommon
              type="email"
              id="email"
              text="Email"
              register={{
                ...register("email", {
                  required: "Email wajib diisi",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email tidak valid",
                  },
                }),
              }}
              errors={errors}
            />
            <InputSelect
              text="Jenis Kelamin"
              id="gender"
              register={register}
              errors={errors}
            />
            <InputFieldPhone
              type="number"
              id="phone"
              text="Nomor Telepon"
              register={register}
              errors={errors}
            />
            <InputFieldPassword
              id="password"
              text="Kata Sandi"
              register={{
                ...register("password", {
                  required: "Kata sandi wajib diisi",
                  minLength: {
                    value: 6,
                    message: "Kata sandi minimal 6 karakter",
                  },
                }),
              }}
              errors={errors}
            />
            <InputFieldPassword
              id="confirm-password"
              text="Konfirmasi Kata Sandi"
              register={{
                ...register("confirm-password", {
                  required: "Kata sandi wajib diisi",
                  validate: (value) =>
                    value === watch("password") || "Kata sandi tidak sama",
                }),
              }}
              errors={errors}
            />
            <section className="flex flex-col gap-4">
              <Button className="bg-primary-500 hover:bg-green-500 text-white" type="submit">
                Daftar
              </Button>
              <Button
                type="button"
                onClick={() => navigate("/login")}
                className="bg-primary-100 hover:bg-[#e2fcd9] text-primary-500"
              >
                Masuk
              </Button>
            </section>
          </FormInput>
        </Form>
      </Main>
      <ModalAuth
        textH={isNormalRegister ? `Registrasi Berhasil` : `Masuk dengan Google berhasil`}
        textP={isNormalRegister ? `Akun Anda telah berhasil dibuat.` : `Selamat datang ${JSON.parse(localStorage.getItem("authData"))?.name}.`}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RegisterPage;
