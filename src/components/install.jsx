import React, { useEffect, useState } from "react";

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // default prompt ko rok lo
      setDeferredPrompt(e); // event ko save kar lo
      setIsInstallable(true); // show install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // install prompt dikhao
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("PWA installation accepted ✅");
        } else {
          console.log("PWA installation dismissed ❌");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <>
      {isInstallable && (
        <button
          onClick={handleInstallClick}
          className="p-2 px-4 bg-blue-600 text-white rounded-xl shadow-md mt-4"
        >
          Install App
        </button>
      )}
    </>
  );
};

export default InstallPWA;
