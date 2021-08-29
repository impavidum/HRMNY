import React from 'react'
// import MailchimpSubscribe from "react-mailchimp-subscribe"

// Component Imports
import './footer.scss'

// const url = "https://loop1.us11.list-manage.com/subscribe/post?u=97603701d7af042276c399e13&amp;id=61ca92f9b4";

const Footer = () => {


  // const SimpleForm = () => <MailchimpSubscribe url={url}/>

  return (
    <div className="footer">

      {/* <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className="subscribe">
        <p>Want to be notified of future releases and new features?</p>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "#5EDF64" }}>subscribing...</div>}
        {status === "error" && <div style={{ color: "#68686E" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "#5EDF64" }}>Subscribed !</div>}
      </div>
    )}
  />  */}

      <p className="copyright">&#9400; 2019 Harmony</p>

    </div>
  )
}

export default Footer

{/* <div className="subscribe"> */ }
{/* <h1>Stay Informed</h1> */ }
{/* 
 <MailchimpSubscribe url={url}/>

</div> */}
