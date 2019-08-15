import React , {Component}from 'react';
import withAuth from '../components/withAuth.js';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

class FormCreatePersonalAccount extends Component{
  state = {
    redirect: false,
  }

  render() {
    const {errors, isSubmitting,...props} = this.props
    if(props.form === 1){
      return(
        <section className="container-form">
          <div className='header-form'>
            <h2>Personal account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Duis eget nibh sed sem tempus 
            pharetra non nec odio.</p>
          </div>
          <Form>
            <section className='image-upload'>
              <div>
                <img src='' alt=''/>
              </div>
              <div>
                <h3>Profile picture</h3>
                <p>add a profile picture</p>
              </div>
            </section>
            <section className='information-form'>
              <div>
                <label>Name</label>
                {errors.email && <>{errors.email}</>}
                <Field type='email' name='email' placeholder='Write your email'/>
              </div>
              <div>
              <label>Password</label>
                {errors.password && <p>{errors.password}</p>}
                <Field type='hidden' value='PersonalAccount'/>
                <Field type='password' name='password' placeholder='Write your password'/>
              </div>
              <button disabled={isSubmitting && true} type='submit'> submit </button>
            </section>
          </Form>
        </section>
      )
    }else if(props.form === 2){
      return(
        <div className="App">
          <Form>
            <h2>PRUEBA 2</h2>
            {errors.email && <p>{errors.email}</p>}
            <Field type='email' name='email' placeholder='Write your email'/>
            {errors.password && <p>{errors.password}</p>}
            <Field type='password' name='password' placeholder='Write your password'/>
            <button disabled={isSubmitting && true} type='submit'> submit </button>
          </Form>
        </div> 
      )
    }else{
      return(<>
      
      </>)
    } 
  }
}

export default withAuth(withFormik({
  mapPropsToValues({email, password}) {
    return ({
      email: email || '',
      password: password || ''
    })
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('It has to be correct')
      .required(),
    password: Yup.string()
      .min(8)
      .required()
  }),
  handleSubmit(values, {setSubmitting, setErrors, resetForm, ...bag})  {
    const {email, password} = values 
    bag.props.signup({email, password})
    .then((response)=>{
      return response
    }).catch(error => error)
  }
 })(FormCreatePersonalAccount));
