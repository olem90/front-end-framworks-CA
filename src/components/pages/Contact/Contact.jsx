import { useState } from "react";
import { ContactWrapper } from "./Contact.styles";
import { FormContainer } from "./Contact.styles";
import { FormStyles } from "./Contact.styles";

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
  
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

    return (
        <ContactWrapper>
          <FormContainer>
            <FormStyles>

              <input value={fullName} 
              placeholder="Your first name" 
              onChange={onFullNameChange}/> 

              <input value={subject}
              placeholder="Your subject" 
              onChange={onSubjectChange}/>  

              <input value={email}
              placeholder="Your email" 
              onChange={onEmailChange}/> 

              <input value={body}
              placeholder="Your message" 
              onChange={onBodyChange}/>   
             
            </FormStyles>
          </FormContainer>   
        </ContactWrapper>
    )
}

export default Contact;