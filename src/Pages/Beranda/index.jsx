import Navbar from "../../Components/Layouts/Navbar";
import MainFooter from "../../Components/Layouts/MainFooter";
import MainBeranda from "../../Components/Layouts/MainBeranda";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State untuk autentikasi
  const [modalOpen, setModalOpen] = useState(false); // State untuk membuka modal
  const navigate = useNavigate();

  
  const handleLogin = (email, password) => {
    
    const users = [
      { email: "user1@example.com", password: "password123", username: "User One" },
      { email: "user2@example.com", password: "password456", username: "User Two" },
    ];

    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      setIsAuthenticated(true); // Set autentikasi berhasil
      localStorage.setItem("authData", JSON.stringify(user)); 
    }
  };


  const handleLogout = () => {
    setIsAuthenticated(false); 
    localStorage.removeItem("authData"); 
    setModalOpen(true); 
  };

  // Menutup modal
  const handleCloseModal = () => {
    setModalOpen(false); // Tutup modal
    navigate("/"); 
  };

  return (
    <>
      <Navbar/>
      <MainBeranda />
      <MainFooter />
    </>
  );
};

export default Beranda;