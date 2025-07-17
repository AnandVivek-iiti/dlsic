import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  LifeBuoy, HeartHandshake, Users,
  FileWarning, PhoneForwarded, MessageSquarePlus
} from "lucide-react";

const StudentSupportPage = () => {
  const navigate = useNavigate();
  const supportSections = [
    {
      title: "Counselling Services",
      desc: "Confidential support for personal, academic, and emotional well-being.",
      href: "/student/support/counselling",
      icon: <HeartHandshake className="h-6 w-6 text-orange-500" />,
      
    },
    {
      title: "Mentorship Program",
      desc: "Connect with alumni and teachers for guidance and career advice.",
      href: "/student/support/mentorship",
      icon: <Users className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Grievance Redressal",
      desc: "A safe space to report concerns and grievances for fair resolution.",
      href: "/student/support/grievance",
      icon: <FileWarning className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Helpline & Emergency",
      desc: "Immediate assistance and contact information for emergencies.",
      href: "/student/support/helpline",
      icon: <PhoneForwarded className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Feedback & Suggestions",
      desc: "Share your valuable feedback to help us improve our services.",
      href: "/student/support/feedback",
      icon: <MessageSquarePlus className="h-6 w-6 text-orange-500" />,
    },
  ];

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-block p-4 rounded-xl bg-blue-100">
          <LifeBuoy className="h-10 w-10 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-blue-700">Student Support Center</h1>
        <p className="text-gray-600 text-lg">
          Your central hub for well-being, guidance, and assistance.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {supportSections.map((section, i) => (
          <Link
            to={section.href}
            key={i}
             className="
                    flex flex-col justify-between h-full rounded-xl border bg-white shadow-sm 
                    hover:shadow-xl hover:scale-[1.03] 
                    transition-all duration-300 ease-in-out group"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-orange-50">
                  {section.icon}
                </div>
                <h2 className="text-lg font-semibold text-blue-700">
                  {section.title}
                </h2>
              </div>
              <p className="text-sm text-gray-600">{section.desc}</p>
            </div>

            <div className="px-6 pb-6">
              <button
                className={`
                  w-full flex items-center justify-center gap-2 text-sm font-medium rounded-lg py-2
                  ${section.highlight
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'border border-gray-300 text-black hover:border-orange-700 hover:bg-orange-400'}
                  transition-colors duration-200
                `}
              >
                Learn More
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentSupportPage;
