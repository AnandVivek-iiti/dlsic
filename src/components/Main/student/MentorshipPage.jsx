import { Users, Briefcase, Lightbulb, Link as LinkIcon } from "lucide-react";
import { useLanguage } from "../context/Languagecontext";

const WhatsappIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="..." />
  </svg>
);
const TelegramIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="..." />
  </svg>
);

const mentors = [
  { name: "Sovran Raj", roleKey: "student.support.mentorship.mentor1.role", bioKey: "student.support.mentorship.mentor1.bio", initials: "SR" },
  { name: "Anand Vivek", roleKey: "student.support.mentorship.mentor2.role", bioKey: "student.support.mentorship.mentor2.bio", initials: "AV" },
];

const benefits = [
  { icon: Briefcase, titleKey: "student.support.mentorship.benefit1.title", descKey: "student.support.mentorship.benefit1.desc" },
  { icon: Lightbulb, titleKey: "student.support.mentorship.benefit2.title", descKey: "student.support.mentorship.benefit2.desc" },
  { icon: LinkIcon, titleKey: "student.support.mentorship.benefit3.title", descKey: "student.support.mentorship.benefit3.desc" }
];

const MentorshipPage = () => {
  const { t } = useLanguage();

  return (
    <div className="p-6 space-y-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300 p-5 rounded-full w-fit mx-auto shadow-lg">
          <Users className="h-10 w-10 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-blue-700">{t('student.support.mentorship.pageTitle')}</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('student.support.mentorship.subtitle')}</p>
      </div>

      {/* Benefits */}
      <div className="space-y-8">
        <h2 className="text-3xl text-center font-bold text-blue-700">{t('student.support.mentorship.benefitsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-xl border shadow-md p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 active:scale-[1.03] hover:shadow-2xl">
              <div className="w-fit mx-auto bg-blue-100 border border-blue-300 p-3 rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">{t(benefit.titleKey)}</h3>
              <p className="text-sm text-gray-600 mt-2">{t(benefit.descKey)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mentors */}
      <div className="space-y-8">
        <h2 className="text-3xl text-center font-bold text-blue-700">{t('student.support.mentorship.meetMentors')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center border-2 border-blue-200 
                   hover:border-blue-300 shadow-md hover:shadow-xl 
                  transform transition-all duration-300 
                  hover:-translate-y-2 hover:scale-[1.02]
                  active:scale-[1.03] active:shadow-sm"
            >
              <div className="w-24 h-24 mx-auto bg-blue-700 text-white flex items-center justify-center text-3xl font-bold rounded-full border-4 border-blue-300 shadow-inner">
                {mentor.initials}
              </div>
              <h3 className="text-xl font-bold text-blue-800 mt-4">{mentor.name}</h3>
              <p className="text-blue-600 font-medium">{t(mentor.roleKey)}</p>
              <p className="text-sm text-gray-600 mt-2">{t(mentor.bioKey)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="pt-10 text-center border-t">
        <h3 className="text-2xl font-semibold text-blue-700">{t('student.support.mentorship.cta.title')}</h3>
        <p className="text-gray-600 mt-2 mb-6 max-w-2xl mx-auto">{t('student.support.mentorship.cta.subtitle')}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://whatsapp.com/channel/0029VacupYgHFxP2LhjNao1S"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1EBE57] text-white px-6 py-3 rounded-lg shadow-lg flex items-center text-base font-semibold transition-transform transform hover:-translate-y-1"
          >
            <WhatsappIcon className="h-6 w-6 mr-2" />
            {t('student.support.mentorship.cta.whatsapp')}
          </a>
          <a
            href="https://t.me/AvSovu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0088cc] hover:bg-[#0077b3] text-white px-6 py-3 rounded-lg shadow-lg flex items-center text-base font-semibold transition-transform transform hover:-translate-y-1"
          >
            <TelegramIcon className="h-6 w-6 mr-2" />
            {t('student.support.mentorship.cta.telegram')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;
