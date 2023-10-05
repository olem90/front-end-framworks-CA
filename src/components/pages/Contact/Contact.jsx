import { useState } from "react";
import { ContactWrapper, FormContainer, FormStyles } from "./Contact.styles";

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const [emailError, setEmailError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [subjectError, setsubjectError] = useState('');
    const [bodyError, setbodyError] = useState('');
  
    function onFullNameChange(event) {
        setFullName(event.target.value)
    };

    function onSubjectChange(event) {
        setSubject(event.target.value)
    };

    function onEmailChange(event) {
        setEmail(event.target.value)
    };

    function onBodyChange(event) {
        setBody(event.target.value)
    };

    function onFormSubmit(event) {
      event.preventDefault();
      let isValid = true;

      const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;

      if (!emailPattern.test(email)) {
        setEmailError("* Invalid email address");
          isValid = false;
      } else {
        setEmailError("");
      }

      if (fullName.length < 3) {
        setFullNameError("* Full name must be at least 3 charachters long");
          isValid = false;
      } else {
        setFullNameError("");
      }

      if (subject.length < 3) {
        setsubjectError("* Subject must be at least 3 charachters long");
          isValid = false;
      } else {
        setsubjectError("");
      }

      if (body.length < 3) {
        setbodyError("* Message must be at least 3 charachters long");
          isValid = false;
      } else {
        setbodyError("");
      }

      if (isValid) {
        console.log({ fullName, subject, email, body });
      }
    }

    return (
        <ContactWrapper>
          <FormContainer>
            <FormStyles onSubmit={onFormSubmit}>
              <label htmlFor="full-name">Full Name</label>
              <input value={fullName} 
              placeholder="Your full name" 
              onChange={onFullNameChange}
              required/> 
                <span>{fullNameError}</span>
              
              <label htmlFor="subject">Subject</label>
              <input value={subject}
              placeholder="Your subject" 
              onChange={onSubjectChange}
              required/> 
                <span>{subjectError}</span>

              <label htmlFor="email">Email</label>
              <input value={email}
              placeholder="Your email" 
              onChange={onEmailChange}
              required/> 
                <span>{emailError}</span>
              
              <label htmlFor="body">Message</label>
              <textarea value={body}
              placeholder="Your message" 
              onChange={onBodyChange}
              rows={8} required/> 
                <span>{bodyError}</span>  

              <button type="submit">Submit</button>
             
            </FormStyles>
          </FormContainer>   
        </ContactWrapper>
    )
}
export default Contact;