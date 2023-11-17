import React from 'react';
import { useState } from 'react'

function ContactUsForm() {

    const [firstName, setFirstName] = useState('') // useState to store First Name
    const [email, setEmail] = useState('') // useState to store Email address of the user
    const [subject, setSubject] = useState('') // useState to store Last Name
    const [comments, setComments] = useState('') // useState to store Mobile Number

    function validateForm() {
        // Check if the First Name is an Empty string or not.
    
        if (firstName.length == 0) {
          alert('Invalid Form, First Name can not be empty')
          return
        }
    
        // Check if the Email is an Empty string or not.
    
        if (email.length == 0) {
          alert('Invalid Form, Email Address can not be empty')
          return
        }

        alert('Form is valid')
      }

    return (
        <>
            {/* <!-- Start Contact --> */}
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input className="form-control" placeholder="" onChange={(e) => setFirstName(e.target.value)}/>                                    
                                    <label htmlFor="floatingInput">Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input className="form-control" placeholder="" onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="inputemail">Email id</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input className="form-control" placeholder="" onChange={(e) => setSubject(e.target.value)}/>
                                    <label htmlFor="inputemail">Subject</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <select className="form-select" aria-label="Floating label select example">
                                        <option>Select</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                    <label htmlFor="floatingSelectGrid">Gender</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="" onChange={(e) => setComments(e.target.value)} style={{ height: '100px' }}></textarea>
                                    <label htmlFor="floatingTextarea">Comments</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3" onClick={() => {validateForm()}}>Let's Talk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- End Contact --> */}
        </>
    );
}
export default ContactUsForm;