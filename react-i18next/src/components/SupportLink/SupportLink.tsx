import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import config from '../../config/config';

const SupportLink = () => {
  const {t, i18n} = useTranslation();

  const changeLanguageHandler = useCallback(() => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('de');
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  const googleSearchLink =
    i18n.language === 'de'
      ? config.deGoogleSearchLink
      : config.enGoogleSearchLink;

  return (
    <div>
      <button onClick={changeLanguageHandler}>
        {t('changeLanguageLabel')}
      </button>

      <a
        className="testing-link"
        data-testid="support-link"
        href={googleSearchLink}
      >
        {googleSearchLink}
      </a>
    </div>
  );
};

export default SupportLink;
