import React , {Component}from 'react';
import withAuth from './withAuth.js';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

class FormTrainers extends Component{
  render() {
    const {errors, isSubmitting, touched, values} = this.props
    return(
      <div>

        <Form>
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
                  id='pilates'
                  name="pilates"
                  type="checkbox"
                  checked={values.pilates}
                  className={"checkbox" + (errors.pilates && touched.pilates ? " is-invalid" : "")
                }
                />
                <label className='skills' htmlFor='pilates'><img src="/img/trx.jpg" alt=""/></label>
                <Field
                  id='stretching'
                  name="stretching"
                  type="checkbox"
                  checked={values.stretching}
                  className={"checkbox" + (errors.stretching && touched.stretching ? " is-invalid" : "")
                }
                />
                <label className='skills' htmlFor='stretching'><img src="/img/trx.jpg" alt=""/></label>
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
              name="train"
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
      </div>
    )
  }
}
  
export default withAuth(withFormik({
  mapPropsToValues({name, surname, email, password, country, city, academic, description, train, imageUrl}) {
    return ({
      name: name || '',
      surname: surname || '',
      email: email || '',
      password: password || '',
      country: country || '',
      city: city || '',
      academic: academic || '',
      description: description || '',
      train: train || '',
      imageUrl: imageUrl || ''
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
      .min(1)
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
      .max(100)
      .required('Description is required'),
    train: Yup
      .string()
      .oneOf(['Metropolitan', 'Dir'])
      .min(1)
      .required('Train is required'),
  }),
  handleSubmit(values, {setSubmitting, setErrors, resetForm, ...bag})  {
    const {name, surname, imageUrl, email, password, country, city, academic, description, train, ...checkboxes } = values
    const skills = [];
    for (const key in checkboxes) {
      if(checkboxes[key]) {
        skills.push(key)
      }
    }
    console.log(skills)
    console.log(values)
    bag.props.signup({name, surname, imageUrl, email, password, country, city, academic, description, skills, train })
    .then((response)=>{
      return response
    }).catch(error => error)
  }
 })(FormTrainers));
