
function ContactUsForm() {
    return (
        <>
            {/* <!-- Start Contact --> */}
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="" />
                                    <label for="floatingInput">Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <label htmlFor="inputemail" for="floatingInput">Email id</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" placeholder="Subject" />
                                    <label htmlFor="inputemail" for="floatingInput">Subject</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form-floating">
                                    <select class="form-select" aria-label="Floating label select example">
                                        <option selected>Select</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                    <label for="floatingSelectGrid">Gender</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" style={{height: '100px'}}></textarea>
                                    <label for="floatingTextarea">Comments</label>
                                </div>
                            </div>
                        </div>
                                                
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Let's Talk</button>
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