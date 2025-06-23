
     export default function Alumni (){
        return (
            <>
      {/* Alumni Section */}
      <section id="alumni" className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Proud Alumni</h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          Our alumni are shining in diverse fields across India and abroad. Their journey began here — and continues to inspire our students.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 w-80 text-center">
            <img src="https://source.unsplash.com/400x300/?success,businessman" alt="Alumni Success" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">Ravi Sharma - Entrepreneur</h3>
            <p className="my-2">Founder of a leading tech startup, Ravi always remembers the discipline and support from his DLS days.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 w-80 text-center">
            <img src="https://source.unsplash.com/400x300/?doctor,healthcare" alt="Doctor Alumni" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">Dr. Neha Verma - Surgeon</h3>
            <p className="my-2">Practicing in Delhi, she credits her academic foundation at DLS Inter College for her success.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          We’d love to hear from you. Reach out with any questions or feedback.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-full md:w-1/2 space-y-4">
            <p><strong>Address:</strong><br />DLS Inter College, Rithora, Bareilly, Uttar Pradesh</p>
            <p><strong>Phone:</strong><br />+91-XXXXXXXXXX</p>
            <p><strong>Email:</strong><br />dlscollege@example.com</p>
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
                <label className="block mb-1">Name:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1">Email:</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1">Message:</label>
                <textarea className="w-full p-2 border rounded" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-blue-700 text-white py-2 px-6 rounded">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-200 mt-8">
        © 2025 DLS Inter College, Rithora Bareilly | All Rights Reserved
      </footer>
      </>
     ) }