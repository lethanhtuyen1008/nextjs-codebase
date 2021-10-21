import Dropdown from 'components/materialUI/dropdown';
import {
  DEFAULT_LANGUAGE,
  ENGLISH,
  LANGUAGE,
  LANGUAGE_EN,
  LANGUAGE_ES,
  SPANISH,
} from 'libs/commons/constants';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();
  const languageDefault = typeof window !== 'undefined' && window?.localStorage?.getItem(LANGUAGE);

  const [language, setLanguage] = React.useState<string>(languageDefault || DEFAULT_LANGUAGE);

  const handleChange = (event: any) => {
    const newLanguage: string = event.target.value as string;
    window?.localStorage?.setItem(LANGUAGE, newLanguage);
    setLanguage(newLanguage);
    i18n?.changeLanguage(newLanguage);
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
      getItemLabel={(item) => item.label}
      getItemValue={(item) => item.value}
      value={language}
      onChange={handleChange}
    />
  );
};

export default Language;
