import AV from '../assets/AV.png';
import SR from '../assets/SR.png';
import AP from '../assets/AP.png';
import AS from '../assets/AS.png';
import IMG from '../assets/image.png';
import M from '../assets/M.png';

const alumniData = [
  {
    name: 'Sovran Raj',
    batch: 'Batch of 2023',
    role: 'Student at IIIT Jabalpur',
    quote: 'DLS gave me the foundation I needed to dream big.',
    image: SR,
  },
  {
    name: 'Anurag Pandey',
    batch: 'Batch of 2023',
    role: 'Indian Navy Officer',
    quote: 'The discipline and guidance at DLS shaped my journey.',
    image: AP,
  },
  {
    name: 'Ashish Sharma',
    batch: 'Batch of 2023',
    role: 'NEET Qualifier',
    quote: 'DLS gave me the foundation I needed to dream big.',
    image: AS,
  },
  {
    name: 'Vikas Yadav',
    batch: 'Batch of 2023',
    role: 'Indian Army',
    quote: 'DLS gave me the foundation I needed to dream big.',
    image: IMG,
  },
  {
    name: 'Anand Vivek',
    batch: 'Batch of 2024',
    role: 'Student at IIT Indore',
    quote: 'DLS helped me grow as a leader and learner.',
    image: AV,
  },
  {
    name: 'Mohit',
    batch: 'Batch of 2024',
    role: 'Student at SLIET Panjab, and preparing for DRDO.',
    quote: 'DLS helped me grow as a leader and learner.',
    image: M,
  },
  {
    name: 'Sovran Raj',
    batch: 'Batch of 2023',
    role: 'Student at IIIT Jabalpur',
    quote: 'DLS gave me the foundation I needed to dream big.',
    image: SR,
  },
  {
    name: 'Anand Vivek',
    batch: 'Batch of 2024',
    role: 'Student at IIT Indore',
    quote: 'DLS helped me grow as a leader and learner.',
    image: AV,
  },
];

export default function AlumniSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff]">
      <h2 className="text-4xl text-center font-bold text-indigo-800 mb-3">🎓 DLS Alumni</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto text-lg mb-12">
        Our proud alumni are making a difference across industries and nations. Here's what some of them have to say.
      </p>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {alumniData.map((alumni, index) => (
          <div
            key={index}
            className="bg-white rounded-[22px] w-[300px] min-h-[360px] p-6 shadow-[0_8px_32px_rgba(43,54,126,0.1)] text-center 
                       transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <img
              src={alumni.image}
              alt={alumni.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-200 shadow"
            />
            <h3 className="text-xl font-semibold text-indigo-800">{alumni.name}</h3>
            <p className="text-sm text-gray-500 italic">{alumni.batch}</p>
            <p className="text-sm text-gray-600 mt-1">{alumni.role}</p>
            <p className="text-sm text-gray-700 mt-4 px-2 font-medium">“{alumni.quote}”</p>
            <button
              type="button"
              className="mt-6 bg-gradient-to-r from-indigo-800 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold 
                         hover:scale-105 hover:-translate-y-1 transition-transform"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
