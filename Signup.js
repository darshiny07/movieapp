import React from 'react';
import { useFormik , Formik , Form, Field} from 'formik';
import './App.css'
import * as Yup from "yup";

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const signupSchema = Yup.object({
  name: Yup.string().min(3).required("Please enter your name."),

  email: Yup.string().email("Please enter valid email.") .required("Please enter your email."),
      
     
  password: Yup.string().matches(passwordRegex, "Please enter valid password.").required("Please enter your password."),
      
      
  cpassword: Yup.string().oneOf([Yup.ref("password")], "Password do NOT match!").required("Please enter confirm password."),
     
      
});


const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword:'',
};

const Signup = () => {
  const {values ,handleBlur ,handleChange,handleSubmit,errors, touched} = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit:(values,action)=>{
      console.log(values);
     action.resetForm()
    },
  });

const onSubmit = (values,action)=>{
  console.log(values);
 action.resetForm()
}


  return (
    <div className='app'>
      <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={onSubmit}>
                <Form className='signup_form'>
          <label htmlFor="name">Name</label>
          <input type="text" name='name'value={values.name} onBlur={handleBlur} onChange={handleChange}/>
         
          <div className='error_container'>
            {errors.name && touched.name && <p className='form_error'>{errors.name}</p>}
          </div>

          <label htmlFor="email">Email</label>
          <input type="email" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}/>

          
          <div className='error_container'>
            {errors.email && touched.email && <p className='form_error'>{errors.email}</p>}
          </div>

          <label htmlFor="password">Password</label>
          <input type="password" name='password'value={values.password} onBlur={handleBlur} onChange={handleChange}/>

          <div className='error_container'>
            {errors.password && touched.password && <p className='form_error'>{errors.password}</p>}
          </div>

          <label htmlFor="cpassword">Confirm Password</label>
          <input type="cpassword" name='cpassword'value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/>

          <div className='error_container'>
            {errors.cpassword && touched.cpassword && <p className='form_error'>{errors.cpassword}</p>}
          </div>
        
          <button type='submit'>submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Signup
