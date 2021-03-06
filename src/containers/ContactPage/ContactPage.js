import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

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
    <div className="bg-dark flex w-screen ">
      <div className="mt-16 contact-form lg:px-32 px-12 xs:px-4 md:mt-24 md:mt-40 md:w-1/2 md:block flex flex-col items-center md:mb-0 mb-16">
        <h1 className="inline text-black bg-primaryYellow text-3xl lg:text-5xl font-semibold inline">
          Contact me
        </h1>
        <p className="md:hidden my-6 text-lightGray font-semibold text-justify">
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
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({ 'form-name': 'contact', values }),
            })
              .then(() => alert('Success!'))
              .catch((error) => alert(error));
          }}
        >
          {({ errors, touched }) => (
            <Form name="contact" className="flex flex-col w-full bg-dark">
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
      <div className="w-1/2 h-screen bg-primaryYellow hidden md:flex items-center">
        <p className="w-3/4 pl-16 text-2xl font-semibold text-justify">
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
