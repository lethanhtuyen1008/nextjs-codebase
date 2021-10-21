import Dropdown from 'components/materialUI/dropdown';
import { DEFAULT_LANGUAGE } from 'libs/commons/constants';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = React.useState<string>(DEFAULT_LANGUAGE);

  const handleChange = (event: any) => {
    const newLanguage: string = event.target.value as string;
    setLanguage(newLanguage);
    i18n?.changeLanguage(newLanguage);
  };

  return (
    <Dropdown
      options={[]}
      getItemLabel={(item: any) => item.label}
      getItemValue={(item: any) => item.value}
      value={language}
      onChange={handleChange}
    />
  );
};

export default Language;
