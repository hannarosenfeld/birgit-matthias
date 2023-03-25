import React from "react"

import Layout from "../../components/layout/Layout"

export default function Kontakt() {
    return(
        <Layout>
          <div className="mt-5">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
              className="d-flex flex-column kontakt">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <label>
                Name
                <input type="text" name="name" id="name" />
              </label>
              <label>
                Email
                <input type="email" name="email" id="email" />
              </label>
              <label>
                Subject
                <input type="text" name="subject" id="subject" />
              </label>
              <label>
                Message
                <textarea name="message" id="message" rows="5" />
              </label>
              <button type="submit">Send</button>
              <input type="reset" value="Clear" />
            </form>
          </div>
        </Layout>
    )
}
