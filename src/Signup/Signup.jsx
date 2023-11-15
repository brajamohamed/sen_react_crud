import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
const Signup = ({ users, setUsers }) => {
  let emailRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    c_password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name &&
      form.email &&
      form.phone &&
      form.password &&
      form.c_password
    ) {
      if (emailRef.current.checkValidity()) {
        if (form.password === form.c_password) {
          // alert("submitted successfully");
          setUsers([...users, form]);
          setForm({
            name: "",
            email: "",
            phone: "",
            password: "",
            c_password: "",
          });
        } else {
          alert("password doesn't match");
        }
      } else {
        alert("Enter a valid Email");
      }
    } else {
      alert("Fill all fields");
    }
  };
  useEffect(() => {
    console.log("Users in Signup", users);
  }, [users]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="container-md">
      <div className="row d-flex justify-content-center mt-5 p-5 border">
        <form action="" className="col-xl-6 col-lg-8">
          <h4 className="my-4">Employee Registraion</h4>
          <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Email</span>
            <input
              type="email"
              className="form-control"
              ref={emailRef}
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Phone</span>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Password</span>
            <input
              type="password"
              className="form-control"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Confirm Password</span>
            <input
              type="password"
              className="form-control"
              name="c_password"
              value={form.c_password}
              onChange={handleChange}
              required
            ></input>
          </div>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="btn d-block w-100 btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
