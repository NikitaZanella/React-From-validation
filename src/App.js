import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required(),
  email: Yup.string().email('Invalid email').required('Required'),
  address: Yup.string().min(10, 'Too Short!').max(50, 'Too Long!'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  passwordConfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const App = () => (
  <div className="w-full h-screen">
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4 w-1/2 mx-auto p-3 border">
          <h1>React form with formik & yup</h1>
          <div className="w-full space-y-2">
            <label htmlFor="firstName">First Name</label>
            <Field
              className={`w-full p-3 border ${
                errors.firstName && touched.firstName ? 'border-red-500' : null
              } ${
                !errors.firstName && touched.firstName
                  ? 'border-green-500'
                  : null
              }`}
              id="firstName"
              name="firstName"
              placeholder="Jane"
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="lastName">Last Name</label>
            <Field
              className={`w-full p-3 border ${
                errors.lastName && touched.lastName ? 'border-red-500' : null
              } ${
                !errors.lastName && touched.lastName ? 'border-green-500' : null
              }`}
              id="lastName"
              name="lastName"
              placeholder="Doe"
            />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="email">Email</label>
            <Field
              className={`w-full p-3 border ${
                errors.email && touched.email ? 'border-red-500' : null
              } ${!errors.email && touched.email ? 'border-green-500' : null}`}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="address">Address</label>
            <Field
              className={`w-full p-3 border ${
                errors.address && touched.address ? 'border-red-500' : null
              } ${
                !errors.address && touched.address ? 'border-green-500' : null
              }`}
              id="address"
              name="address"
              placeholder="Nino Bixio 36"
            />
            {errors.address && touched.address ? (
              <div>{errors.address}</div>
            ) : null}
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="password">Password</label>
            <Field
              className={`w-full p-3 border ${
                errors.password && touched.password ? 'border-red-500' : null
              } ${
                !errors.password && touched.password ? 'border-green-500' : null
              }`}
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <Field
              className={`w-full p-3 border ${
                errors.passwordConfirmation && touched.passwordConfirmation
                  ? 'border-red-500'
                  : null
              } ${
                !errors.passwordConfirmation && touched.passwordConfirmation
                  ? 'border-green-500'
                  : null
              }`}
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="password"
              type="password"
            />
            {errors.passwordConfirmation && touched.passwordConfirmation ? (
              <div>{errors.passwordConfirmation}</div>
            ) : null}
          </div>
          <button className="w-full p-3 bg-blue-500 text-white" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default App;
