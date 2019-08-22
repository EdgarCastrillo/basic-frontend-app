import React , {Component}from 'react';
import FileComponent from './FileComponent'
import FormUsers from './FormUsers';

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
      return(
        <section className='container-form'>
          <div className='header-form'>
            <h2>Personal account</h2>
            <p>Now, fill in the following fields to start the search for personal trainer. The more fields you indicate, the more the selection of coaches will adapt.</p>
          </div>
          <div className='img-upload'>
            <div className='img-title'>
              <h3>Profile picture</h3>
              <p>add a profile picture</p>
            </div>
            <FileComponent getImage={this.getImage}/>
          </div>
          <FormUsers imageUrl={this.state.images} />
        </section>
      )
    }
  } 

export default FormCreatePersonalAccount;
