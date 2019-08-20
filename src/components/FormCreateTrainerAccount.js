import React , {Component}from 'react';
import FileComponent from './FileComponent'
import FormTrainers from './FormTrainers';

class FormCreateTrainerAccount extends Component{
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
      return(
        <section className="container-form">
          <div className='header-form'>
            <h2>Personal account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Duis eget nibh sed sem tempus 
            pharetra non nec odio.</p>
          </div>
          <div className='img-upload'>
            <h3>Profile picture</h3>
            <p>add a profile picture</p>
            <FileComponent getImage={this.getImage}/>
          </div>
          <FormTrainers imageUrl={this.state.images} />
        </section>
      )
    }
  } 

export default FormCreateTrainerAccount;