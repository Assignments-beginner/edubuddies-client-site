import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import "./MakeAdmin.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Select from "react-select";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    setAdmin(true);
    axios
      .put("https://fierce-caverns-90976.herokuapp.com/users/admin", data)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: `You made a new admin ${data?.email}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setAdmin(false);
      });
    e.target.reset();
  };
  const [allUsers, setAllusers] = useState();
  React.useEffect(() => {
    axios
      .get(`https://fierce-caverns-90976.herokuapp.com/allusersdata`)
      .then((res) => {
        setAllusers(res.data);
      });
  }, []);
  console.log(allUsers);
  const options = [
    { value: "Admin", label: "Admin" },
    { value: "Instructor", label: "Instructor" },
    { value: "Student", label: "Student" },
    { value: "User", label: "User" },
  ];
  const [role, setRole] = React.useState();
  const [emails, setEmails] = React.useState();
  console.log(emails);
  const handleOnHover = (result) => {
    setEmails(result);
    console.log(result);
  };
  const changeRole = () => {
    const data = {
      email: emails?.email,
      role: role?.value,
    };
    axios
      .put("https://fierce-caverns-90976.herokuapp.com/changerole", data)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: `Role Changed Successfully for ${emails?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleOnSearch = (string, results) => {};
  const handleOnSelect = (item) => {};
  const handleOnFocus = () => {};
  const customStyles = {
    control: (base) => ({
      ...base,
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "21px",
      border: "1px solid #21274F !important",
      boxShadow: "none",
      minHeight: "60px",
      "&:focus": {
        border: "0 !important",
      },
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "blue",
      color: "white",
    }),
  };
  return (
    <div className="bg-style">
      <div className="grid place-items-center h-screen -mt-16">
        <div className=" lg:w-1/4 w-full">
          <h1 className="text-3xl mb-9 text-red-500 font-bold">
            Change User Role
          </h1>
          <Select
            styles={customStyles}
            className="mb-3"
            onChange={setRole}
            options={options}
          />
          <ReactSearchAutocomplete
            items={allUsers}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            fuseOptions={{ keys: ["email"] }}
            resultStringKeyName="email"
          />
          <button
            onClick={() => changeRole()}
            className="w-full mt-7 bg-red-500 hover:bg-transparent border border-red-500 duration-300 text-white py-3 px-6 rounded-full mx-auto"
            type="submit"
          >
            Change Role
          </button>
        </div>
      </div>
      {admin && <LoadingOverlay />}
    </div>
  );
};

export default MakeAdmin;
