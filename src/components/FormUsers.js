import React , {Component}from 'react';
import withAuth from './withAuth.js';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

class FormUsers extends Component {
  render() {
    const {errors, isSubmitting, touched } = this.props
    return (
      <div>
        <Form>
          <section className='info-form'>
            <div className='info-block'>
              <label>Email</label>
              <Field type='email' name='email' placeholder='Write your email'/>
              {touched.email && errors.email && <p className='form-error'>{errors.email}</p>}
            </div>
            <div className='info-block'>
            <label>Password</label>
              <Field type='hidden' value='PersonalAccount'/>
              <Field type='password' name='password' placeholder='Write your password'/>
              {touched.password && errors.password && <p className='form-error'>{errors.password}</p>}
            </div>
            <button disabled={isSubmitting && true} type='submit' className='btn-gradient-form'>Create profile</button>
          </section>
        </Form>
      </div>
    )
  }
}


export default withAuth(withFormik({
  mapPropsToValues({email, password, imageUrl }) {
    return ({
      email: email || '',
      password: password || '',
      imageUrl: imageUrl || ''
    })
  },
  validationSchema: Yup.object().shape({
    email: Yup
      .string()
      .email('It has to be correct')
      .required(),
    password: Yup
      .string()
      .min(1)
      .required()
  }),
  handleSubmit(values, {setSubmitting, setErrors, resetForm, ...bag})  {

    const {email, password, imageUrl} = values
    console.log(values)
    bag.props.signup({email, password, imageUrl})
    .then((response)=>{
      return response
    }).catch(error => error)
  }
 })(FormUsers));