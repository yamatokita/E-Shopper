import React from 'react';

function Contact_form() {
    return (
        <div className="col-sm-8">
        <div className="contact-form">
            <h2 className="title text-center">Get In Touch</h2>
            <div className="status alert alert-success" style={{ display: 'none' }} />
            <form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
                <div className="form-group col-md-6">
                    <input type="text" name="name" className="form-control" required="required" placeholder="Name" />
                </div>
                <div className="form-group col-md-6">
                    <input type="email" name="email" className="form-control" required="required" placeholder="Email" />
                </div>
                <div className="form-group col-md-12">
                    <input type="text" name="subject" className="form-control" required="required" placeholder="Subject" />
                </div>
                <div className="form-group col-md-12">
                    <textarea name="message" id="message" required="required" className="form-control" rows={8} placeholder="Your Message Here" defaultValue={""} />
                </div>
                <div className="form-group col-md-12">
                    <input type="submit" name="submit" className="btn btn-primary pull-right" defaultValue="Submit" />
                </div>
            </form>
        </div>
        </div >
    );
}

export default Contact_form;