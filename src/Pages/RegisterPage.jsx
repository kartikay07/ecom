import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const RegisterPage = () => {
  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("first is required"),
    email: Yup.string()
      .required("email is required")
      .email("email should be valid email"),
    mobile: Yup.string().required("mobile is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be 6 char long"),
  });

  //   const validate = (values) => {
  //     let errors = {};
  //     if (!values.firstName) {
  //       errors.firstName = "first name is required";
  //     }

  //     if (!values.email) {
  //       errors.email = "email  is required";
  //     }else if(!/^[A-Z0-9.%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.test(values.email)){
  //         errors.email = "email is not a valid email address"
  //     }

  //     if (!values.mobile) {
  //       errors.mobile = "mobile is required";
  //     }

  //     if (!values.password) {
  //       errors.password = "password is required";
  //     }

  //     return errors;
  //   };

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
    validateOnMount: true
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px 40px",
              marginTop: "60px",
              borderRadius: "10px",
              boxShadow: "10px 5px #888",
            }}
          >
            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>

              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already Registered? <Link to="/login">Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
