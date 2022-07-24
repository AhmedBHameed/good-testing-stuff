// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const mockLocalStorageMock = (() => {
  let store: any = {};
  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorageMock,
});

const mockChangeLanguage = jest.fn();
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  withTranslation: () => (Component: any) => {
    Component.defaultProps = {...Component.defaultProps, t: () => ''};
    return Component;
  },
  useTranslation: () => {
    return {
      t: (str: string, config?: {defaultValue: string}): string =>
        config?.defaultValue || str,
      i18n: {
        language: mockLocalStorageMock.getItem('i18nextLng'),
        languages: ['en'],
        changeLanguage: mockChangeLanguage,
      },
    };
  },
}));

export {mockChangeLanguage};
