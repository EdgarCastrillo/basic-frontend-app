import React , {Component}from 'react';
import withAuth from '../components/withAuth.js';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

class FormCreatePersonalAccount extends Component{
  state = {
    redirect: false,
  }

  render() {
    const {errors, isSubmitting, touched, values} = this.props
      return(
        <>
        <section className="container-form">
          <div className='header-form'>
            <h2>Personal trainer account</h2>
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
              </div>
            </section>
            <section className='info-form'>
              <div className='info-block'>
                <label>Name</label>
                <Field 
                type='text'
                name='name'
                placeholder='Write your name'
                />
                {touched.name && errors.name && <p className='form-error'>{errors.name}</p>}
                <Field 
                type='text'
                name='surname'
                placeholder='Write your surname'
                />
                {touched.surname && errors.surname && <p className='form-error'>{errors.surname}</p>}
                <Field 
                type='email'
                name='email'
                placeholder='Write your email'
                />
                {touched.email && errors.email && <p className='form-error'>{errors.email}</p>}
              </div>
              <div className='info-block'>
                <label>Password</label>
                <Field
                type='hidden'
                value='PersonalAccount'
                />
                <Field
                type='password'
                name='password'
                placeholder='Write your password'
                />
                {touched.password && errors.password && <p className='form-error'>{errors.password}</p>}
                </div>
              <div className='info-block'>
                <label>Country</label>
                <Field
                name="country"
                component='select'
                >
                <option value="" disabled label="Select a country" />
                <option value="Spain" label="Spain" />
                <option value="France" label="France" />
                </Field>
                {touched.country && errors.country && <p className="form-error">{errors.country}</p>}
              </div>
              <div className='info-block'>
                <label>City</label>
                <Field
                name="city"
                component='select'
                >
                <option value="" disabled label="Select a city" />
                <option value="Barcelona" label="Barcelona" />
                <option value="Bilbao" label="Bilbao" />
                <option value="Madrid" label="Madrid" />
                <option value="Sevilla" label="Sevilla" />
                <option value="Valencia" label="Valencia" />
                </Field>
                {touched.city && errors.city && <p className="form-error">{errors.city}</p>}
              </div>
              <div className='info-block'>
                <label>Academic degrees</label>
                <Field
                name="academic"
                component='select'
                >
                <option value="" disabled label="Select your academic degree" />
                <option value="Inef" label="Inef" />
                <option value="Master in Sport Performance" label="Master in Sport Performance" />
                </Field>
                {touched.academic && errors.academic && <p className="form-error">{errors.academic}</p>}
              </div>
              <div className='info-block'>
                <label>Description</label>
                <Field 
                component='textarea'
                name='description'
                placeholder='About you'
                />
                {touched.description && errors.description && <p className='form-error'>{errors.description}</p>}
              </div>
              <div className='info-block'>
              <label>Skills</label>
                <section className='skill-group'>
                  <Field
                  id='trx'
                  name="trx"
                  type="checkbox"
                  checked={values.trx}
                  className={"checkbox" + (errors.trx && touched.trx ? " is-invalid" : "")
                  }
                  />
                  <label className='skills' htmlFor='trx'><img src="/img/trx.jpg" alt=""/></label>
                  <Field
                  id='yoga'
                  name="yoga"
                  type="checkbox"
                  checked={values.yoga}
                  className={"checkbox" + (errors.yoga && touched.yoga ? " is-invalid" : "")
                  }
                  />
                  <label className='skills' htmlFor='yoga'><img src="/img/trx.jpg" alt=""/></label>
                  <Field
                  id='musculation'
                  name="musculation"
                  type="checkbox"
                  checked={values.musculation}
                  className={"checkbox" + (errors.musculation && touched.musculation ? " is-invalid" : "")
                  }
                  />
                  <label className='skills' htmlFor='musculation'><img src="/img/trx.jpg" alt=""/></label>
                  <Field
                  id='cardio'
                  name="cardio"
                  type="checkbox"
                  checked={values.cardio}
                  className={"checkbox" + (errors.cardio && touched.cardio ? " is-invalid" : "")
                  }
                  />
                  <label className='skills' htmlFor='cardio'><img src="/img/trx.jpg" alt=""/></label>
                </section>
              </div>
              <div className='info-block'>
                <label>Where do I train?</label>
                <Field
                name="trian"
                component='select'
                >
                <option value="" disabled label="Select your gym" />
                <option value="Metropolitan" label="Metropolitan" />
                <option value="Dir" label="Dir" />
                </Field>
                {touched.train && errors.train && <p className="form-error">{errors.train}</p>}
              </div>
              <button disabled={isSubmitting && true} type='submit' className='btn-gradient-form'>Create profile</button>
            </section>
          </Form>
        </section>
        </>
      )
  }
}
  
export default withAuth(withFormik({
  mapPropsToValues({name, surname, email, password, country, city, academic, description,}) {
    return ({
      name: name || '',
      surname: surname || '',
      email: email || '',
      password: password || '',
      country: country || '',
      city: city || '',
      academic: academic || '',
      description: description || '',
    })
  },
  validationSchema: Yup.object().shape({
    name: Yup
      .string()
      .required(),
    surname: Yup
      .string(),
    email: Yup
      .string()
      .email('It has to be correct')
      .required(),
    password: Yup
      .string()
      .min(8)
      .required(),
    country: Yup
      .string()
      .oneOf(['Spain', 'France'])
      .min(1)
      .required('Country is required'),
    city: Yup
      .string()
      .oneOf(['Barcelona', 'Bilbao', 'Madrid', 'Sevilla', 'Valencia'])
      .min(1)
      .required('City is required'),
    academic: Yup
      .string()
      .oneOf(['Inef', 'Master in Sport Performance'])
      .min(1)
      .required('Academic degree is required'),
    description: Yup
      .string()
      .max(10)
      .required('Description is required'),
  }),
  handleSubmit(values, {setSubmitting, setErrors, resetForm, ...bag})  {
    // values.skills = []
    // if(values.trx) values.skills.push('trx')
 
    const {name, surname, email, password, country, city, academic, description, train, ...checkboxes } = values
    const skills = [];
    for (const key in checkboxes) {
      if(checkboxes[key]) {
        skills.push(key)
      }
    }
    console.log(skills)
    bag.props.signup({name, surname, email, password, country, city, academic, description, skills, train })
    .then((response)=>{
      return response
    }).catch(error => error)
  }
 })(FormCreatePersonalAccount));
