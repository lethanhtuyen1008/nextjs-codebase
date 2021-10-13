import { InputLabel, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  ENGLISH,
  LANGUAGE_EN,
  LANGUAGE_ES,
  SPANISH,
} from "src/commons/commons";

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
    <FormControl variant="outlined" fullWidth>
      <Select
        labelId="demo-simple-select-filled-label"
        value={language}
        onChange={handleChange}
      >
        <MenuItem value={LANGUAGE_EN} selected={language === LANGUAGE_EN}>
          {ENGLISH}
        </MenuItem>

        <MenuItem value={LANGUAGE_ES} selected={language === LANGUAGE_ES}>
          {SPANISH}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Language;
