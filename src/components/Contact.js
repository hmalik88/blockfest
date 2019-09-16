import React from 'react'
import '../scss/Contact.scss';

function Contact() {
  return(
    <>
      <h1>Contact Us</h1>
      <div>
        For any questions or inquiries,<br/>
        please reach us at <a href='mailto:info@blockfest.co'><span>info@blockfest.co</span></a>.<br/>
        Also, follow us <a className='twitter' href='https://twitter.com/BlockFestNYC'>@BlockFestNYC</a> on Twitter!
      </div>
    </>
    )
}

export default Contact;
