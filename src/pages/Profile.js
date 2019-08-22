import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import TopNav from '../components/TopNav.js';
import ProfileForm from '../components/ProfileForm';

class Explore extends Component {
  state = {
    name: this.props.user.name,
    nameState: false,
    surname: this.props.user.surname,
    surnameState: false,
    images: this.props.user.images,
    imageState: false,
    email: this.props.user.email,
    emailState: false,
    password: this.props.user.password,
    passwordState: false,
    country: this.props.user.country,
    countryState: false,
    city: this.props.user.city,
    cityState: false,
    academic: this.props.user.academic,
    academicState: false,
    description: this.props.user.description,
    descriptionState: false,
    skills: this.props.user.skills,
    skillsState: false,
    train: this.props.user.train,
    trainState: false,
    trainer: this.props.user.trainer,
    trainerState: false,
  }

  handleChangeState = (state, string, name, value) => {
    if(state) {
      this.setState({
        [string]: false,
        [name]: value
      })    
    }else {
      this.setState({
        [string]: true
      })    
    }
  }

  render() {
    const {name, nameState, surname, surnameState, email, country, city, academic, description, descriptionState, skills, train, trainer} = this.state
    console.log(email)
    return (
      <section className="profile-container">
        <TopNav/>
         <section className="profile-content">
          <section className="header-profile">
            <section className="title">
              <h2>Hi, {name ? name : 'User'}!</h2>
              <p onClick={this.props.logout}>Logout</p>
            </section>
            <div className="img-container">
              <img src={this.props.user.imageUrl} alt=""/>
            </div>
          </section>
          <section className="info-container">
            <p className="sub-title">Name</p>
            {this.state.nameState ?  <ProfileForm name='name' value={name ? name : ''} changeStateFather={this.handleChangeState} /> : 
            <p onClick={() => this.handleChangeState(nameState, 'nameState')} className="info-profile"> {name ? name : 'name'}</p>
            }
            {this.state.surnameState ?  <ProfileForm name='surname' value={surname ? surname : ''} changeStateFather={this.handleChangeState} /> :
            <p onClick={() => this.handleChangeState(surnameState, 'surnameState')} className="info-profile"> {surname ? surname : 'surname'}</p>
            }
          </section>
          <section className="info-container">
            <p className="sub-title">Email</p>
            <p className="info-profile"> {email ? email : 'email'}</p>
          </section>
          {trainer ? 
            <>
              <section className="info-container">
                <p className="sub-title">Country</p>
                <p className="info-profile">{country ? country : 'select your country'}</p>
              </section>
              <section className="info-container">
                <p className="sub-title">City</p>
                <p className="info-profile">{city ? city : 'select your city'}</p>
              </section>
              <section className="info-container">
                <p className="sub-title">Academic degrees</p>
                <p className="info-profile">{academic ? academic : ''}</p>
              </section>
              <section className="info-container">
                <p className="sub-title">Description</p>
                {this.state.descriptionState ?  <ProfileForm name='description' value={description ? description : ''} changeStateFather={this.handleChangeState} /> : 
                <p onClick={() => this.handleChangeState(descriptionState, 'descriptionState')} className="info-profile"> {description ? description : 'About you'}</p>
                }
              </section>
              <section className="info-container">
                <p className="sub-title">Skills</p>
                {skills.map((skill) =>{
                 return <p className="info-profile">{skill}</p>
                })}
              </section>
              <section className="info-container">
                <p className="sub-title">Where do I train?</p>
                <p className="info-profile">{train ? train : '' }</p>
              </section>
            </>
            : null}
            <section className="info-container">
              <p className="sub-title">Do you want to delete your account?</p>
              <p onClick={this.props.delete} className="delete">Delete</p>
            </section>
        </section>
        <Navbar/>
      </section>
    )
  }
}

export default withAuth(Explore);