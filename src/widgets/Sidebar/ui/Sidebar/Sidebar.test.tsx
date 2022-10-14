import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test render Sidebar', () => {
        // eslint-disable-next-line i18next/no-literal-string

        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggle', () => {
        // eslint-disable-next-line i18next/no-literal-string

        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
