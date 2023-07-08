import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Formik, Form, Field, useFormik } from 'formik';
import { signUpSchema } from "./Signupschema";

import './contactbody.css';

const initialValues = {
    name: "",
    company: "",
    subject: "",
    country: "",
    email: "",
    phone: "",
    message: "",
    agree: false
}

const Contactbody = () => {
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


    const [forms, setForm] = useState("form1");

    return (
        <>
            <section className='contactbody-section' >
                <Container>
                    <Row className='w-100 mx-auto'>
                        <Col className='col-md-6'>

                            <div className='content-box'>
                                <div className="strok">Contact</div>
                                <div className="h1 anima">Contact <br /> <span className='anima-underline'>Us</span></div>

                                <div className='address-map mt-5 '>
                                    <iframe title="Address Map" style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.7031439219286!2d77.05427902352508!3d28.442059253087333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f17a5ff558d%3A0x84ecc28985870835!2sPreferred%20Square!5e0!3m2!1sen!2sin!4v1688731138363!5m2!1sen!2sin" width="600" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    {/* <iframe title="Address Map" style={{border:0}}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.372604981984!2d77.1023046754182!3d28.438182225771445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f52fa539f2d%3A0xd5b637d9ef23ef83!2sVATIKA%20TOWER%2C%20Suncity%2C%20Sector%2054%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1686918094986!5m2!1sen!2sin" width="600" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                                </div>
                                <div className='text-center mt-5'>
                                    {/* <p>Preferred Square Analytics Private Limited</p>
    <p>Tower B, 14th Floor, Vatika Tower, Golf Course Road</p> */}
                                    <p>Preferred Square Analytics Private Limited<br />
                                        <br />
                                        Tower B, 14th Floor, Vatika Tower, Golf Course Road<br />
                                        Sector 54, Gurugram<br />
                                        Haryana - 122003<br />
                                        India<br />
                                        <br />
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg> +919810376994</p>
                            </div>
                        </div>

                    </Col>
                    <Col className='col-md-6'>

                        <div className='content-box margintop'>
                            <h4>Type of enquiry*</h4>

                            <div className='d-flex py-3 text-dark gap-2 justify-content-start' >
                                <div><input type="radio" value="form1" onChange={() => { setForm('form1') }} name="form" checked="checked" /> Client-service enquiries</div>
                                <div><input type="radio" value="form2" onChange={() => { setForm('form2') }} name="form" /> Recruiting information</div>
                            </div>

                            <div className='form-box'>
                                <div className={forms === 'form1' ? "form1 d-block" : "form1 d-none"}>
                                    <Formik
                                    // initialValues={{ email: '', password: '' }}
                                    // validate={values => {
                                    //     const errors = {};
                                    //     if (!values.email) {
                                    //     errors.email = 'Required';
                                    //     } else if (
                                    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    //     ) {
                                    //     errors.email = 'Invalid email address';
                                    //     }
                                    //     return errors;
                                    // }}
                                    // onSubmit={(values, { setSubmitting }) => {
                                    //     setTimeout(() => {
                                    //     alert(JSON.stringify(values, null, 2));
                                    //     setSubmitting(false);
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
                                                    <label htmlFor="phone" className="">Phone*</label>
                                                    <Field type="text" name="phone" placeholder='' aria-labelledby="phone" value={values.phone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="phone" className="" component="div" /> */}
                                                    <div className='errormsg'> {errors.phone && touched.phone ? (
                                                        <p className="form-error">{errors.phone}</p>
                                                    ) : null}</div>
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="email" className="">Email*</label>
                                                    <Field type="email" name="email" placeholder='' aria-labelledby="email" value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="email" component="div" /> */}
                                                    <div className='errormsg'> {errors.email && touched.email ? (
                                                        <p className="form-error">{errors.email}</p>
                                                    ) : null}</div>
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="company" className="">Company </label>
                                                    <Field type="text" name="company" placeholder='' aria-labelledby="company" value={values.company}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="company" className="" component="div" /> */}
                                                    <div className='errormsg'> {errors.company && touched.company ? (
                                                        <p className="form-error">{errors.company}</p>
                                                    ) : null}</div>
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="country" className="">Country</label>
                                                    <Field type="text" name="country" placeholder='' aria-labelledby="country" value={values.country}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="country" className="" component="div" /> */}
                                                    <div className='errormsg'> {errors.country && touched.country ? (
                                                        <p className="form-error">{errors.country}</p>
                                                    ) : null}</div>
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="subject" className="">Subject</label>
                                                    <Field type="text" name="subject" placeholder='' aria-labelledby="subject" value={values.subject}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="subject" className="" component="div" /> */}
                                                    <div className='errormsg'> {errors.subject && touched.subject ? (
                                                        <p className="form-error">{errors.subject}</p>
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

                                                <div className='mb-3 text-dark'>
                                                    <Field type="checkbox" name="agree" className="mr-5" aria-labelledby="agree"
                                                        value={values.agree}
                                                        onChange={handleChange}
                                                    />
                                                    <label className='checkbox-label' >  I agree to the terms and conditions</label>
                                                    {/* <ErrorMessage name="agree" component="div" /> */}

                                                    <p>
                                                        Preferred Square is committed to protecting your information. Your information will be used in accordance with the applicable data privacy law, our internal policies and our privacy policy. As Preferred Square is a global organisation, your information may be stored and processed by Preferred Square and its affiliates in countries outside your country of residence, but wherever your information is processed, we will handle it with the same care and respect for your privacy.
                                                    </p>
                                                    <div className='errormsg'> {errors.agree && touched.agree ? (
                                                        <p className="form-error">{errors.agree}</p>
                                                    ) : null}</div>
                                                </div>


                                                <div className='text-left mobile-align'>
                                                    <button type="submit">Submit
                                                    </button>
                                                </div>

                                            </Form>
                                        )}
                                    </Formik>

                                </div>

                                <div className={forms === 'form2' ? "form2 d-block" : "form2 d-none"}>
                                    <Formik
                                    // initialValues={{ email: '', password: '' }}
                                    // validate={values => {
                                    //     const errors = {};
                                    //     if (!values.email) {
                                    //     errors.email = 'Required';
                                    //     } else if (
                                    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    //     ) {
                                    //     errors.email = 'Invalid email address';
                                    //     }
                                    //     return errors;
                                    // }}
                                    // onSubmit={(values, { setSubmitting }) => {
                                    //     setTimeout(() => {
                                    //     alert(JSON.stringify(values, null, 2));
                                    //     setSubmitting(false);
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
                                                    <label htmlFor="phone" className="">Phone*</label>
                                                    <Field type="text" name="phone" placeholder='' aria-labelledby="phone" value={values.phone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="phone" className="" component="div" /> */}
                                                    <div className='errormsg'> {errors.phone && touched.phone ? (
                                                        <p className="form-error">{errors.phone}</p>
                                                    ) : null}</div>
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="email" className="">Email*</label>
                                                    <Field type="email" name="email" placeholder='' aria-labelledby="email" value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="email" component="div" /> */}
                                                    <div className='errormsg'> {errors.email && touched.email ? (
                                                        <p className="form-error">{errors.email}</p>
                                                    ) : null}</div>
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="company" className="">Company / College Name</label>
                                                    <Field type="text" name="company" placeholder='' aria-labelledby="company" value={values.company}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="company" className="" component="div" /> */}
                                                    <div className='errormsg'> {errors.company && touched.company ? (
                                                        <p className="form-error">{errors.company}</p>
                                                    ) : null}</div>
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="country" className="">Country</label>
                                                    <Field type="text" name="country" placeholder='' aria-labelledby="country" value={values.country}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="country" className="" component="div" /> */}
                                                    <div className='errormsg'> {errors.country && touched.country ? (
                                                        <p className="form-error">{errors.country}</p>
                                                    ) : null}</div>
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="subject" className="">Subject</label>
                                                    <Field type="text" name="subject" placeholder='' aria-labelledby="subject" value={values.subject}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    {/* <ErrorMessage name="subject" className="" component="div" /> */}<div className='errormsg'> {errors.subject && touched.subject ? (
                                                        <p className="form-error">{errors.name}</p>
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

                                                <div className='mb-3 text-dark'>
                                                    <Field type="checkbox" name="agree" className="mr-5" aria-labelledby="agree" value={values.agree}
                                                        onChange={handleChange}
                                                    />
                                                    I agree to the terms and conditions
                                                    {/* <ErrorMessage name="agree" component="div" /> */}

                                                    <p>
                                                        Preferred Square is committed to protecting your information. Your information will be used in accordance with the applicable data privacy law, our internal policies and our privacy policy. As Preferred Square is a global organisation, your information may be stored and processed by Preferred Square and its affiliates in countries outside your country of residence, but wherever your information is processed, we will handle it with the same care and respect for your privacy.
                                                    </p>
                                                    <div className='errormsg'> {errors.agree && touched.agree ? (
                                                        <p className="form-error">{errors.agree}</p>
                                                    ) : null}</div>
                                                </div>


                                                <div className='text-left'>
                                                    <button type="submit" >Submit
                                                    </button>
                                                </div>

                                            </Form>
                                        )}
                                    </Formik>

                                </div>

                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </section >

        </>
    )
}

export default Contactbody
