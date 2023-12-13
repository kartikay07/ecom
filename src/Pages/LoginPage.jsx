import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {};

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email should be a valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be 6 character long"),
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
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                            formik.touched.password && formik.errors.password
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>

            <br />
            <p className="text-center">
              New User? <Link to="/register">Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
