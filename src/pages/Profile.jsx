import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../components/Navbar";

const Profile = () => {
  const users = Math.floor(Math.random() * 10);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const history = useHistory();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/users/${users}`
      );
      setAddress(response.data.address.city);
      setPhone(response.data.phone);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setFirstName(response.data.name.firstname);
      setLastName(response.data.name.lastname);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    alert("Are you sure you want to logout?");
    localStorage.removeItem("accessTokenApi");
    history.replace("/");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h2 className="text-center text-2xl font-semibold mb-6">
            User Profile
          </h2>
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-4 text-lg">
                  First Name
                </th>
                <th className="border border-gray-300 p-4 text-lg">
                  Last Name
                </th>
                <th className="border border-gray-300 p-4 text-lg">Username</th>
                <th className="border border-gray-300 p-4 text-lg">Email</th>
                <th className="border border-gray-300 p-4 text-lg">Phone</th>
                <th className="border border-gray-300 p-4 text-lg">Address</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 p-4">{firstname}</td>
                <td className="border border-gray-300 p-4">{lastname}</td>
                <td className="border border-gray-300 p-4">{username}</td>
                <td className="border border-gray-300 p-4">{email}</td>
                <td className="border border-gray-300 p-4">{phone}</td>
                <td className="border border-gray-300 p-4">{address}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <button
          onClick={logout}
          className="w-1/4 mt-11 bg-red-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
