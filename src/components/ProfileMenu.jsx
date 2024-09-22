import { Link } from "react-router-dom";
import { HiViewGrid } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/slices/userSlice";
import { Dropdown } from "flowbite-react";
import { LogOut, User } from "lucide-react";
import { toast } from "react-toastify";

const ProfileMenu = ({ name, email, is_admin, accessToken }) => {
  const server = import.meta.env.VITE_SERVER;
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      const res = await fetch(`${server}/auth/logout`, {
        method: "POST",
        headers: { Authorization: `${accessToken}` },
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        dispatch(signoutSuccess());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Dropdown label={name} l inline color="" arrowIcon={false}>
      <Dropdown.Header>
        <span className="block text-sm">{name}</span>
        <span className="block truncate text-sm font-medium">{email}</span>
      </Dropdown.Header>
      {is_admin ? (
        <Link to="/dashboard">
          <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
        </Link>
      ) : (
        ""
      )}
      <Link to={"/account"}>
        <Dropdown.Item icon={User}>Profile</Dropdown.Item>
      </Link>
      <Dropdown.Divider />
      <Dropdown.Item icon={LogOut} onClick={handleSignout}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
};

export default ProfileMenu;
