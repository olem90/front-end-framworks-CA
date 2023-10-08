import { useState, useEffect } from "react";
import { ContactWrapper, FormContainer, FormStyles } from "./Contact.styles";
import { FormButton } from "../../Button/Button.styles";

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const [emailError, setEmailError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [subjectError, setsubjectError] = useState('');
    const [bodyError, setbodyError] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
      let timer;
      if(isValid) {
        timer = setTimeout(() => {
          setIsValid(false)
        }, 10000)
      }
      return () => {
        clearTimeout(timer);
      };
    }, [isValid]);
  
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
      
      const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
      let valid = true;

      if (!emailPattern.test(email)) {
        setEmailError("* Invalid email address");
        valid = false;
      } else {
        setEmailError("");
      }

      if (fullName.length < 3) {
        setFullNameError("* Full name must be at least 3 charachters long");
        valid = false;
      } else {
        setFullNameError("");
      }

      if (subject.length < 3) {
        setsubjectError("* Subject must be at least 3 charachters long");
        valid = false;
      } else {
        setsubjectError("");
      }

      if (body.length < 3) {
        setbodyError("* Message must be at least 3 charachters long");
        valid = false;
      } else {
        setbodyError("");
      }

      setIsValid(valid);

      if (valid) {
        console.log({ fullName, subject, email, body });
      }
    }

    return (
      <div className="contact-page-wrapper">
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

              <FormButton type="submit">Submit</FormButton>

              {isValid ? ( 
                <p className="form-success-message">
                Thank you for contacting us. Your form has been submitted 
                and we will reach out to you within 48 hours.
                </p>    

              ) : ""}
             
            </FormStyles>
            
          </FormContainer>   
        </ContactWrapper>
      </div>
    )
}
export default Contact; 