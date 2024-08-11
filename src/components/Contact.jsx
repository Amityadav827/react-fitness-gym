import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder='Full Name' required />
        <input type="email" placeholder='Type Your E-mail' required />
        <textarea placeholder='Write Here......' name="message"/>
        <input type="submit" value='send' />
      </form>
    </div>
  )
}

export default Contact
