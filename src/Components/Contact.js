// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Container, 
  TextField,
  Dialog,
  DialogContent,
  DialogTitle } from "@mui/material";
// import ReactDOM from 'react-dom/client';
import React, { Component, Fragment } from 'react'



class ContactForm extends Component {
state = {
  open: false,
  name: '', 
  address: '', 
  email: '', 
  phonenumber: '', 
  message: '',
}
toggleDialog = () => this.setState({ open: !this.state.open })

handleTextChange = (e) => {
  const newState = { ...this.state }
  newState[e.target.id] = e.target.value
  this.setState(newState)
}

handleSubmit = (e) => {
  e.preventDefault()
  const payload = { ...this.state }
  payload.id = this.props.contactTotal + 1
  delete payload.open
  console.log("The Contact Form: ", payload)
  // add this.props.addCar function here
  // also add this.setState to close the dialog

  // this.props.contactForm(payload)
  this.setState({ open: false })
}

componentDidUpdate = (prevProps, prevState) => {
  if (prevState.open !== this.state.open) {
      this.setState({
        name: '', 
        address: '', 
        email: '', 
        phonenumber: '', 
        message: '',
      })
  }
}

render() {
  return (
      <Fragment>
        <div className="contactContainer">
        <div style={{ textAlign: 'center' }}>
                    <h1> Click on button below to leave me a message.   </h1>
                    <br />
                    <Button
                        variant="contained"
                        className="add-car"
                        onClick={this.toggleDialog}
                    >
                        Add Contact Message
                    </Button>
                    </div>

{/* after you click the button, this is what's going to show on the form */}
                    <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Message</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="Address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="phonenumber" 
                                    placeholder="Phone Number" 
                                    value={this.state.phonenumber} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="email" 
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="message" 
                                    placeholder="Message" 
                                    value={this.state.message} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
                </div>
</Fragment>
  )
}
}

export default ContactForm

// const Contact = () => {
//   const navigate = useNavigate();

//   const [inputs, setInputs] = useState({});
//   const [text,setText] = useState("");

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const submitContact = (e) => {
//     e.preventDefault();
//     navigate("/contactForm");
//     setText("");
    
//     };

//   return (
//     <div className="Contact">
//       <Container className="ContactContainer" maxWidth="sm">
//         <header className="ContactHeader">Let's Keep In Touch!</header>


// {/* https://www.w3schools.com/react/react_forms.asp    Multiple Input field*/}

//           <form className="Contact-form" onSubmit={submitContact}>
//           <TextField
//             required
//             value={inputs.Name || ""} 
//              onChange={handleChange}
//             name="Name"
//             label="Name"
//             type="text"
//           />
//           <TextField
//             required
//             value={inputs.Address || ""} 
//              onChange={handleChange}
//             name="Address"
//             label="Address"
//             type="text"
//           />
//           <TextField
//             required
//             value={inputs.Email || ""} 
//              onChange={handleChange}
//             name="Email"
//             label="Email"
//             type="email"
//           />
//           <TextField
//             required
//             value={inputs.PhoneNumber || ""} 
//             onChange={handleChange}
//             name="PhoneNumber"
//             label="Phone Number"
//             type="phonenumber"
//           />
//           <TextField
//             textarea="true"
//             value={inputs.Message || ""} 
//              onChange={handleChange}
//             id="Message"
//             name="Message"
//             size="50px"
//             maxLength="800"
//             placeholder="20 letters minimum"
//           />
//           <Button
//             type="submit"
//             className="ContactSubmitButton"
//             variant="contained"
//             color="primary"
//             onChange={handleChange}
//           >
//             Submit
//           </Button>

//         </form>
//       </Container>
//     </div>
//   );
// };

// export default Contact;
