import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./components/Main/context/AuthContext.jsx";
import { LanguageProvider } from "./components/Main/context/Languagecontext.jsx";
import { ThemeProvider } from "./components/Main/context/ThemeContext.jsx";
import "./index.css";
import App from "./App.jsx";
import { registerSW } from 'virtual:pwa-register';
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New version available. Refresh now?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  }
});
createRoot(document.getElementById("root")).render(

    <StrictMode>
    <HashRouter>
      <LanguageProvider>
        <AuthProvider>
          <ThemeProvider>
          <App />
          </ThemeProvider>
        </AuthProvider>
      </LanguageProvider>
    </HashRouter>
  </StrictMode>
);
