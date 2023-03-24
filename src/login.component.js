import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field, } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component {
    state = {
        loggedIn: false,
        error: ""
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, e) => {
                        console.log(values)
                        if (values.email === "refathossen24@gmail.com" && values.password === "12345678") {
                            this.setState({ ...this.state, loggedIn: true });
                        }
                        else {
                            this.setState({ ...this.state, error: "invalied" });
                        }
                        e.setSubmitting(false);
                    }}
                >


                    {Formik => (
                        <Form className='container my-3'>
                            {this.state.loggedIn && <Navigate to="/counters" replace={true} />}
                            <div className="mb-3">
                                <label htmlFor="email" className='form label'>Email address : </label>
                                <Field
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="form control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className='form label'>Password : </label>
                                <Field
                                    id="passwordl"
                                    type="password"
                                    name="password"
                                    className="form control"
                                />
                            </div>
                            {this.state.error && <span>{this.state.error}</span>}
                            <br />


                            <button
                                type='submit'
                                className='btn btn-primary'
                            >
                                submit

                            </button>



                        </Form>

                    )}
                </Formik>
            </div>
        );
    }
}

export default Login;