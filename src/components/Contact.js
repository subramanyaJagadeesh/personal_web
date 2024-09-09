import React, {Component} from 'react';
import Mailto from '../utils/mailer'
// import emailjs from 'emailjs-com';
// import { TextField, Button } from '@material-ui/core';
// import {
//   withStyles,
// } from '@material-ui/core/styles';

class Contact extends Component {

  constructor(){
    super();
    // emailjs.init("user_VfdwqI35JmPE5LBLSiZYx");
    // this.handleSubmission = this.handleSubmission.bind(this);
    // this.state = {
    //   name: '',
    //   email: '',
    //   company: '',
    //   message: '',
    //   nameError:false,
    //   emailError:false,
    //   companyError:false,
    //   messageError:false,
    //   disableButton:false
    // }
  }

  // handleSubmission () {
  //   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if(this.state.name.length<3)
  //   {
  //     this.setState({nameError:true})
  //     return
  //   }
  //   this.setState({nameError:false})
  //   if(!(re.test(this.state.email)))
  //   {
  //     console.warn(this.state.email)
  //     this.setState({emailError:true})
  //     return
  //   }
  //   this.setState({emailError:false})
  //   if(this.state.company.length<3)
  //   {
  //     this.setState({companyError:true})
  //     return
  //   }
  //   this.setState({companyError:false})
  //   if(this.state.message.length<6)
  //   {
  //     this.setState({messageError:true})
  //     return
  //   }
  //   this.setState({messageError:false, disableButton:true})
  //   var tempParam ={
  //     from_name: this.state.name,
  //     from_email: this.state.email,
  //     from_company: this.state.company,
  //     from_message: this.state.message
  //   }
  //   emailjs.send("service_3p58zdv", "contact_form", tempParam).then(result=>{
  //     window.location.replace('/');
  //     this.setState({disableButton:false})    
  //   }).catch(error=>{
  //     console.warn(error)
  //   })
  // }

  render(){
    return(
      <div className="contact" id="contact">
        <div className="header">
          <h2>
            I want to be a part of building the <span id="big">next</span> big thing.
          </h2>
        </div>
        <div className="buttons">
          <Mailto email="subramanya.grj@gmail.com" subject="Contacting from Website" body="Hi Subramanya,">
            Contact me
          </Mailto>,
        </div>
        <div className="gradient" />
        {/* <div className="form">
          <form noValidate autoComplete="off">
            <Field
              required
              error={this.state.nameError}
              label="Name"
              className="textField"
              onChange={(val)=>this.setState({name:val.target.value})}
              variant="standard"
              helperText="Field is required"
            />
            <Field
              required
              error={this.state.emailError}
              label="Email"
              defaultValue=""
              className="textField"
              onChange={(val)=>this.setState({email:val.target.value})}
              variant="standard"
              helperText="Field is required"
            />
            <Field
              required
              error={this.state.companyError}
              label="Company"
              defaultValue=""
              className="textField"
              onChange={(val)=>this.setState({company:val.target.value})}
              variant="standard"
              helperText="Field is required"
            />
            <Field
              required
              error={this.state.messageError}
              label="Message"
              multiline
              rowsMax={4}
              className="textField"
              onChange={(val)=>this.setState({message:val.target.value})}
              variant="standard"
              helperText="Field is required"
            />
            <BButton disabled={this.state.disableButton} onClick={()=>this.handleSubmission()} variant="contained" >
              Submit
            </BButton>
            {
              this.state.disableButton?
              <h2>
                Loading...
              </h2>
              :null
            }
          </form>
        </div>
        <div className="opaque"/> */}
      </div>
    )
  }
  
}

// const Field = withStyles({
//   root:{
//     '& label.Mui-focused': {
//       color: 'white',
//     },
//     '& .MuiInput-underline:before':{
//       borderBottomColor: 'white',
//     },
//     '& .MuiInput-underline:after':{
//       borderBottomColor: '#00D646',
//     },
//     '& .MuiInput-underline:hover':{
//       borderBottomColor: '#00D646',
//     },
//     '& .MuiFormLabel-root':{
//       color: 'white',
//       fontFamily:[
//         'Montserrat', 'sans-serif'
//       ]
//     },
//     '& .MuiInputBase-root': {
//       color: 'white',
//     },
//     '& .MuiFormHelperText-root':{
//       color: 'rgba(0,0,0,0)'
//     },
//     '& .Mui-error':{
//       color: '#f44336'
//     },
//     '& .MuiInputBase-input':{
//       color:'white',
//       fontSize: 20,
//       fontFamily:[
//         'Montserrat', 'sans-serif'
//       ]
//     }
//   },
 
// })(TextField)

// const BButton = withStyles({
//   root:{
//     backgroundColor: '#00D646',
//     borderColor: '#00D646',
//     color:'white',
//     '&:hover': {
//       backgroundColor: '#00D646',
//     },
//     fontFamily:['Montserrat', 'sans-serif'],
//   }
// })(Button);


export default Contact;