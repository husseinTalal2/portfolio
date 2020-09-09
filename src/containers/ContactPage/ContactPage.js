import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required'),

  email: Yup.string().email('Invalid email').required('Email is Required'),

  message: Yup.string()
    .min(5, 'Too Short')
    .max(500, 'Too Long')
    .required('Message Required'),
});

function ContactPage() {
  return (
    <div className="bg-dark flex w-screen h-screen">
      <div className="contact-form lg:px-24 px-12 xs:px-4 mt-24 md:mt-40 md:w-1/2">
        <h1 className="inline text-black bg-primaryYellow lg:text-4xl inline text-2xl font-semibold">
          Contact me
        </h1>
        <p className="md:hidden my-6 text-lightGray font-semibold">
          I’m open to freelance work and interested in challenging projects and
          new stuff, if you have any question don’t hesitate and reach out by
          filling the form or contacting me on my social media accounts or my
          E-mail
        </p>
        <Formik
          initialValues={{
            firstName: '',
            message: '',
            email: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col  bg-dark">
              <Field
                className="bg-inputColor text-placeholderColor h-12 rounded-none p-4 mt-6"
                name="firstName"
                placeholder="Name"
                required
              />
              {errors.firstName && touched.firstName ? (
                <div className="text-red-700">{errors.firstName}</div>
              ) : null}

              <Field
                className="bg-inputColor text-placeholderColor h-12 rounded-none p-4 mt-6"
                name="email"
                type="email"
                placeholder="E-mail"
              />
              {errors.email && touched.email ? (
                <div className="text-red-700">{errors.email}</div>
              ) : null}

              <Field
                className="bg-inputColor text-placeholderColor h-24 rounded-none p-4 mt-6"
                name="message"
                as="textarea"
                placeholder="Message"
                required
              />
              {errors.message && touched.message ? (
                <div className="text-red-700">{errors.message}</div>
              ) : null}

              <button
                className="button text-center my-8 bg-transparent w-24 text-base hover:bg-primaryYellow text-primaryYellow font-normal hover:text-darker py-2 px-4 border border-primaryYellow hover:border-transparent rounded-none"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-1/2 bg-primaryYellow hidden md:flex items-center">
        <p className="w-3/4 pl-16 text-2xl font-semibold">
          I’m open to freelance work and interested in challenging projects and
          new stuff, if you have any question don’t hesitate and reach out by
          filling the form or contacting me on my social media accounts or my
          E-mail
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
