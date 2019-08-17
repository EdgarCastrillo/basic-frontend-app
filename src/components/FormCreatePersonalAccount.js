import React , {Component}from 'react';
import withAuth from './withAuth.js';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import FileComponent from './FileComponent'

class FormCreatePersonalAccount extends Component{
  state = {
    redirect: false,
    images: []
  }

getImage = (url) => {
  const {images} = this.state
  images.push(url)
  this.setState({
    images,
  })
}

  render() {
    const {errors, isSubmitting, touched } = this.props
      return(
        <section className="container-form">
          <div className='header-form'>
            <h2>Personal account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Duis eget nibh sed sem tempus 
            pharetra non nec odio.</p>
          </div>
          <Form>
            <section className='img-container'>
              <div className='profile-img'>
                <img src='' alt=''/>
              </div>
              <div className='img-upload'>
                <h3>Profile picture</h3>
                <p>add a profile picture</p>
                <FileComponent getImage={this.getImage}/>
              </div>
            </section>
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
        </section>
      )
    }
  } 

export default withAuth(withFormik({
  mapPropsToValues({email, password }) {
    return ({
      email: email || '',
      password: password || ''
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
    const {email, password, images} = values
    console.log(values)
    bag.props.signup({email, password, images})
    .then((response)=>{
      return response
    }).catch(error => error)
  }
 })(FormCreatePersonalAccount));
