import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { signUpSchema } from "./Signupschema";
import { Formik, Form, useFormik, Field } from "formik";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgimg from '../images/getintouch-bg.webp'
import './getintouch.css';


gsap.registerPlugin(ScrollTrigger);

const initialValues = {
    name: "",
    // company: "",
    // designation: "",
    // country: "",
    email: "",
    phone: "",
    message: "",
}

export const Getintouch = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                console.log(

                    values
                );
                action.resetForm();
            },
        });
    console.log(

        errors
    );

    useEffect(() => {

        // gsap.to(".getintbg", {
        //     left: '0%',
        //     duration: 10, 
        //     delay: 2,
        //     scrollTrigger: {
        //         ease: "power1.out",
        //         trigger: ".getintbg",
        //     //   markers: true,
        //       start: "top bottom",
        //       end: "bottom bottom",
        //       scrub: 10
        //     }
        //   }); 

        gsap.to(".getintbg", {
            scale: 19,
            duration: 2,
            delay: 2,
            scrollTrigger: {
                ease: "power1.out",
                trigger: ".getintbg",
                //   markers: true,
                start: "top center",
                end: "top top",
                scrub: 5
            }
        });

    }, [])


    return (
        <>
            <section className='getint-section desktop' style={{ backgroundImage: `url(${bgimg})` }}>
                <div className='getintbg'></div>
                <Container>
                    <Row className='w-100'>
                        <Col className='col-md-6 desktop'>
                            <div className='content-box'>
                                <h2>Get in touch</h2>
                                {/* <div className="h1">Get in</div>
                        <div className="h1"><span className='animate-underline'>touch</span></div> */}
                                <div className="h1"><span className='animate-underline' style={{ paddingBottom: "40px" }}> with us </span></div>
                                <p className='get-para'>Our experts are always looking to solve new <br />challenges. Write to us and one of our experts will get <br />in touch with you. </p>
                            </div>

                        </Col>

                        <Col className='col-md-6'>
                            <div className='form-box '>
                                <Formik
                                // initialValues={{ email: '', password: '' }}
                                // validate={values => {
                                //     const errors = {};
                                //     if (!values.email) {
                                //         errors.email = 'Required';
                                //     } else if (
                                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                //     ) {
                                //         errors.email = 'Invalid email address';
                                //     }
                                //     return errors;
                                // }}
                                // onSubmit={(values, { setSubmitting }) => {
                                //     setTimeout(() => {
                                //         alert(JSON.stringify(values, null, 2));
                                //         setSubmitting(false);
                                //     }, 400);
                                // }}
                                >
                                    {() => (
                                        <Form onSubmit={handleSubmit}>

                                            <div className='mb-3'>
                                                <label htmlFor="name" className="">Name*</label>
                                                <Field type="text" name="name" placeholder='' aria-labelledby="name" value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                {/* <ErrorMessage name="name" className="" component="div" /> */}
                                                <div className='errormsg'> {errors.name && touched.name ? (
                                                    <p className="form-error">{errors.name}</p>
                                                ) : null}</div>
                                            </div>

                                            <div className='mb-3'>
                                                <label htmlFor="email" className="">Email ID*</label>
                                                <Field type="email" name="email" placeholder='' aria-labelledby="email" value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                {/* <ErrorMessage name="email" component="div" /> */}
                                                <div className='errormsg'> {errors.email && touched.email ? (
                                                <p className="form-error">{errors.email}</p>
                                            ) : null}</div>
                                            </div>
                                           
                                            <div className='mb-3'>
                                                <label htmlFor="phone" className="">Phone Number*</label>
                                                <Field type="text" name="phone" placeholder='' aria-labelledby="phone" value={values.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                {/* <ErrorMessage name="phone" className="" component="div" /> */}
                                                <div className='errormsg'> {errors.phone && touched.phone ? (
                                                <p className="form-error">{errors.phone}</p>
                                            ) : null}</div>
                                            </div>

                                            <div className='mb-3'>
                                                <label htmlFor="message" className="">Message*</label>
                                                <Field component="textarea" name="message" row="10" aria-labelledby="message" value={values.message}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                {/* <ErrorMessage name="message" component="div" /> */}
                                                <div className='errormsg'> {errors.message && touched.message ? (
                                                <p className="form-error">{errors.message}</p>
                                            ) : null}</div>
                                            </div>

                                            <div className='text-right'>
                                                <button type="submit">Send Message
                                                </button>
                                            </div>

                                        </Form>
                                    )}
                                </Formik>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='getint-section mobile' style={{ backgroundImage: `url(${bgimg})` }}>
                <div className='getintbg'></div>
                <Container>
                    <Row className='form-text'>
                        <div className='content-box mt-5'>
                            <h2>Get in touch</h2>
                            <div className="h1">With <span className='animate-underline'> Us</span></div>
                        </div>
                        <p className='get-para'>Our experts are always looking to solve new<br /> challenges. Write to us and one of our experts<br />will get in touch with you. </p>
                    </Row>
                </Container>
                <Container>
                    <Row className=''>
                        <div className='form-box mt-5 pt-3'>
                            <Formik
                            // initialValues={{ email: '', password: '' }}
                            // validate={values => {
                            //     const errors = {};
                            //     if (!values.email) {
                            //         errors.email = 'Required';
                            //     } else if (
                            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            //     ) {
                            //         errors.email = 'Invalid email address';
                            //     }
                            //     return errors;
                            // }}
                            // onSubmit={(values, { setSubmitting }) => {
                            //     setTimeout(() => {
                            //         alert(JSON.stringify(values, null, 2));
                            //         setSubmitting(false);
                            //     }, 400);
                            // }}
                            >
                                {() => (
                                    <Form onSubmit={handleSubmit}>

                                        <div className='mb-3'>
                                            <label htmlFor="name" className="">Name*</label>
                                            <Field type="text" name="name" placeholder='' aria-labelledby="name" value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {/* <ErrorMessage name="name" className="" component="div" /> */}
                                            <div className='errormsg'> {errors.name && touched.name ? (
                                            <p className="form-error">{errors.name}</p>
                                        ) : null}</div>
                                        </div>
                                        

                                        <div className='mb-3'>
                                            <label htmlFor="email" className="">Email ID*</label>
                                            <Field type="email" name="email" placeholder='' aria-labelledby="email" value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {/* <ErrorMessage name="email" component="div" /> */}
                                            <div className='errormsg'> {errors.email && touched.email ? (
                                            <p className="form-error">{errors.email}</p>
                                        ) : null}</div>
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="phone" className="">Phone Number*</label>
                                            <Field type="text" name="phone" placeholder='' aria-labelledby="phone" value={values.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {/* <ErrorMessage name="phone" className="" component="div" /> */}
                                            <div className='errormsg'> {errors.phone && touched.phone ? (
                                            <p className="form-error">{errors.phone}</p>
                                        ) : null}</div>
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="message" className="">Message*</label>
                                            <Field component="textarea" name="message" row="10" aria-labelledby="message" value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {/* <ErrorMessage name="message" component="div" /> */}
                                            <div className='errormsg'> {errors.message && touched.message ? (
                                            <p className="form-error">{errors.message}</p>
                                        ) : null}</div>
                                        </div>


                                        <div className='text-center pb-5'>
                                            <button type="submit">Send Message
                                            </button>
                                        </div>

                                    </Form>
                                )}
                            </Formik>
                        </div>


                    </Row>
                </Container>
            </section >
        </>
    )
}
