import { useEffect } from "react";

import { useLanguage } from "../context/Languagecontext";

import { PhoneForwarded, Shield, Building, HeartPulse, User } from "lucide-react";

export default function HelplinePage() {
  // const { t } = useLanguag()
  const { language, toggleLanguage, t } = useLanguage();
  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);


  const internalContacts = [
    { name: "student.support.helpline.internal.admin", number: "+91-1234567890", icon: Building },
    { name: "student.support.helpline.internal.counselor", number: "+91-0987654321", icon: User },
    { name: "student.support.helpline.internal.security", number: "+91-1122334455", icon: Shield },
  ];

  const externalContacts = [
    { name: "student.support.helpline.external.police", number: "112", icon: Shield },
    { name: "student.support.helpline.external.ambulance", number: "102 / 108", icon: HeartPulse },
    { name: "student.support.helpline.external.child", number: "1098", icon: User },
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto py-6">
      <div className="text-center">
        <div className="inline-block bg-primary/10 p-4 rounded-full bg-blue-200 border-2 border-blue-400">
          <PhoneForwarded className="h-10 w-10 text-primary" />
        </div>
        <h2 className="pt-4 text-3xl font-headline text-primary">
          {t('student.support.helpline.pageTitle')}
        </h2>
        <p className="text-lg max-w-xl mx-auto text-muted-foreground">
          {t('student.support.helpline.subtitle')}
        </p>
      </div>

      {/* Internal Contacts */}
      <div className="border-2 p-4 py-8 border-blue-400 rounded-lg">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          {t('student.support.helpline.internal.title')}
        </h3>
        <div className="space-y-4">
          {internalContacts.map(contact => (
            <div key={contact.name} className="flex items-center gap-4">
              <div className="bg-accent/10 p-3 rounded-lg border-2 bg-orange-200 border-orange-300">
                <contact.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold">{t(contact.name)}</p>
                <a href={`tel:${contact.number}`} className="text-muted-foreground hover:text-primary">
                  {contact.number}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* External Contacts */}
      <div className="border-2 p-4 py-8 border-blue-400 rounded-lg">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          {t('student.support.helpline.external.title')}
        </h3>
        <div className="space-y-4">
          {externalContacts.map(contact => (
            <div key={contact.name} className="flex items-center gap-4">
              <div className="bg-accent/10 p-3 rounded-lg border-2 bg-orange-200 border-orange-300">
                <contact.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold">{t(contact.name)}</p>
                <a href={`tel:${contact.number}`} className="text-muted-foreground hover:text-primary">
                  {contact.number}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
