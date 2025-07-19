
const unitsPart1 = [
  { title: 'यूनिट 1 (संबंध एव फलन)', file: 'lhep201.pdf' },
  { title: 'यूनिट 2 (प्रतिलोम तिरिकोंमितिया फलन)', file: 'lhep202.pdf' },
  { title: 'यूनिट 3 (आव्यूह)', file: 'lhep203.pdf' },
  { title: 'यूनिट 4 (सारणिक)', file: 'lhep204.pdf' },
  { title: 'यूनिट 5 (सांतत्य और अवकलनीयता)', file: 'lhep205.pdf' },
  { title: 'यूनिट 6 (अवकलज के अनुप्रयोग)', file: 'lhep206.pdf' },
];

const unitsPart2 = [
  { title: 'यूनिट 7 (समाकल)', file: 'lhep207.pdf' },
  { title: 'यूनिट 8 (समाकलों के अनुप्रयोग)', file: 'lhep208.pdf' },
  { title: 'यूनिट 9 (अवकल समीकरण)', file: 'lhep209.pdf' },
  { title: 'यूनिट 10 (सदिश बीजगणित)', file: 'lhep210.pdf' },
  { title: 'यूनिट 11 (त्रिविमयि ज्यामिति)', file: 'lhep211.pdf' },
  { title: 'यूनिट 12 (रैखिक प्रोग्रामन)', file: 'lhep212.pdf' },
  { title: 'यूनिट 13 (प्रायिकता)', file: 'lhep213.pdf' },
  { title: 'प्रश्न पत्र सेट 1', file: 'lhep214.pdf' },
  { title: 'प्रश्न पत्र सेट 2', file: 'lhep215.pdf' },
  { title: 'उत्तरमाला', file: 'lhep216.pdf' },
];

function UnitList({ units }) {
  return (
    <ul className="space-y-2">
      {units.map((unit, i) => (
        <li
          key={i}
          className="bg-gray-100 hover:bg-gray-200 rounded px-4 py-2 flex justify-between items-center"
        >
          <span className="text-sm font-medium">{unit.title}</span>
          <a
            href={`https://ncert.nic.in/pdf/publication/exemplarproblem/classXII/mathematics(hindi)/${unit.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            (Open)
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function ExemplarMathsClass12Hindi() {
  return (
    <div className="bg-white shadow-md rounded p-4 w-full md:w-2/3 mx-auto">
      <h2 className="text-xl font-bold text-[#981F4D] mb-4">
        कक्षा 12 गणित (हिंदी) उदाहरण पुस्तिका
      </h2>

      {/* Part I */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">भाग 1</h3>
      <UnitList units={unitsPart1} />

      {/* Part II */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">भाग 2</h3>
      <UnitList units={unitsPart2} />

      {/* Download Button */}
      <div className="mt-8 text-center">
        <a
          href="https://ncert.nic.in/pdf/publication/exemplarproblem/classXII/mathematics(hindi)/lhep.zip"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-blue-700 animate-pulse transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 Download Full Book (Hindi Medium)
        </a>
      </div>
    </div>
  );
}

