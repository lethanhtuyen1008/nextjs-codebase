import FormControl from "@mui/material/FormControl";
import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  ENGLISH,
  LANGUAGE_EN,
  LANGUAGE_ES,
  SPANISH,
} from "src/commons/commons";
import Dropdown from "src/components/materialUI/dropdown";

const Language = () => {
  const { i18n } = useTranslation();
  const languageDefault =
    typeof window !== "undefined"
      ? window.localStorage?.getItem("i18nextLng")
      : "";
  const [language, setLanguage] = React.useState<string>(languageDefault || "");

  const handleChange = (event: any) => {
    const newLanguage: string = event.target.value as string;

    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Dropdown
      options={[
        {
          label: ENGLISH,
          value: LANGUAGE_EN,
        },
        {
          label: SPANISH,
          value: LANGUAGE_ES,
        },
      ]}
      getItemLabel={item => item.label}
      getItemValue={item => item.value}
      defaultValue={languageDefault}
      value={language}
      onChange={handleChange}
    />
  );
};

export default Language;
