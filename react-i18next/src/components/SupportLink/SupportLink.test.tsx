import '../../i18n';
import {render, screen, waitFor, act} from '@testing-library/react';
import {withTranslation} from 'react-i18next';
import SupportLink from './SupportLink';

/**
 * In case you want to mock some libraries methods, @see https://react.i18next.com/misc/testing
 */

const Component = withTranslation()(SupportLink);

function renderComponent() {
  return render(<Component />);
}

describe('SupportLink', () => {
  it('renders english link', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('support-link')).toHaveAttribute(
        'href',
        'https://www.google.co.uk/'
      );
    });
  });

  it('renders german link', async () => {
    act(() => {
      window.localStorage.setItem('i18nextLng', 'de');
    });

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('support-link')).toHaveAttribute(
        'href',
        'https://www.google.de/'
      );
    });
  });
});
