

export default function Sections() {
  return (
    <>
    <div className="acedemic-container text-black text-xl"> </div>
      {/* Academic Section */}
      <section id="academic" className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Academic Excellence</h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          Our curriculum is designed to shape well-rounded individuals. We offer Science, Commerce, and Arts streams with highly qualified faculty. Our focus is on conceptual learning, critical thinking, and personal development through smart classes, labs, and co-curricular activities.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 w-80 text-center">
            <img src="classroom.png" alt="Science Lab" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">Science Stream</h3>
            <p className="my-2">Equipped with modern labs and guided by expert teachers, our science students excel in board exams and competitive tests.</p>
            <button className="btn bg-blue-500 text-white py-2 px-4 rounded">See more</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 w-80 text-center">
            <img src="classroom.png" alt="Library" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">Library & Learning</h3>
            <p className="my-2">Our digital and traditional library offers access to thousands of books and resources for enhanced self-study.</p>
            <button className="btn bg-blue-500 text-white py-2 px-4 rounded">See more</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 w-80 text-center">
            <img src="classroom.png" alt="Commerce Class" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">Commerce Stream</h3>
            <p className="my-2">Business, economics, and accounts taught with real-life simulations and project-based learning.</p>
            <button className="btn bg-blue-500 text-white py-2 px-4 rounded">See more</button>
          </div>
        </div>
      </section>

    </>
  );
}