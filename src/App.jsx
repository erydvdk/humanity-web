import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Program from "./pages/Program";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Dashboard from "./pages/admin/Dashboard";
import Inbox from "./pages/admin/Inbox";
import Donations from "./pages/admin/Donations";
import ChangePassword from "./pages/ChangePassword";
import AddProgram from "./pages/admin/AddProgram";
import AddTeam from "./pages/admin/AddTeam";
import ManageProgram from "./pages/admin/ManageProgram";
import ManageTeam from "./pages/admin/ManageTeam";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Forgot from "./pages/Forgot";
import Payment from "./pages/Payment";
import VolunteerForm from "./pages/VolunteerForm";
import Certificate from "./pages/Certificate";
import AllUser from "./pages/admin/AllUser";
import AllVolunteer from "./pages/admin/AllVolunteer";
import AllProgram from "./pages/admin/AllProgram";
import AllTeam from "./pages/admin/AllTeam";
import Private from "./routes/Private";
import AdminPrivate from "./routes/AdminPrivate";
import PrivateForm from "./routes/PrivateForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { updateSuccess } from "./redux/slices/userSlice";
import VerifyEmail from "./components/VerifyEmail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const server = import.meta.env.VITE_SERVER;
  const { currentUser } = useSelector((state) => state.user);
  const refreshToken = currentUser?.data?.refreshToken;
  const dispatch = useDispatch();

  const getRefreshToken = async () => {
    const res = await axios.post(`${server}/auth/refresh-token`, {
      refreshToken,
    });
    if (res.data.success) {
      dispatch(updateSuccess(res.data));
    }
  };

  useEffect(() => {
    getRefreshToken();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify-email/:id" element={<VerifyEmail />} />
        <Route path="/donate" element={<Payment />} />
        <Route path="/register-as-volunteer" element={<VolunteerForm />} />
        <Route element={<PrivateForm />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<Forgot />} />
        </Route>
        <Route element={<Private />}>
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
        <Route element={<AdminPrivate />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<AllUser />} />
          <Route path="/volunteers" element={<AllVolunteer />} />
          <Route path="/messages" element={<Inbox />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/manage-program" element={<ManageProgram />} />
          <Route path="/add-program" element={<AddProgram />} />
          <Route path="/manage-team" element={<ManageTeam />} />
          <Route path="/add-team" element={<AddTeam />} />
          <Route path="/programs" element={<AllProgram />} />
          <Route path="/teams" element={<AllTeam />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  );
}

export default App;
