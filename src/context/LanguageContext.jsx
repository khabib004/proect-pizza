import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { Ru } from "../data/en";
import { UZ } from "../data/uz";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem("language") || "en"
  );

  const languages = {
    en: Ru,
    uz: UZ,
  };

  const state = { langType, lang: languages[langType], setLangType };

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContextProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageContextProvider;
