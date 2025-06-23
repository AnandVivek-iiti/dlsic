export default function Contact (){
    return(
        <div>

      {/* Contact Section */}
      <section id="contact" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          We’d love to hear from you. Reach out with any questions or feedback.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-full md:w-1/2 space-y-4">
            <p>
              <strong>Address:</strong><br />
              DLS Inter College, Rithora, Bareilly, Uttar Pradesh
            </p>
            <p>
              <strong>Phone:</strong><br />
              +91-XXXXXXXXXX
            </p>
            <p>
              <strong>Email:</strong><br />
              dlscollege@example.com
            </p>
            <iframe
              src="https://www.google.com/maps?q=rithora+bareilly&output=embed"
              width="100%"
              height="200"
              className="rounded border-0"
              loading="lazy"
              title="Map"
            ></iframe>
          </div>

          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold">Name:</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Email:</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Message:</label>
                <textarea className="w-full p-2 border rounded" rows="4" placeholder="Write your message..."></textarea>
              </div>
              <button type="submit" className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-200 mt-8">
        © 2025 DLS Inter College, Rithora Bareilly | All Rights Reserved
      </footer>
   </div>
        
    )
}