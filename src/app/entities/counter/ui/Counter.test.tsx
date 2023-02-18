import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render Counter', () => {
        // eslint-disable-next-line i18next/no-literal-string
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('Test increment button', () => {
        // eslint-disable-next-line i18next/no-literal-string
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('btn-increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('Test render Counter', () => {
        // eslint-disable-next-line i18next/no-literal-string
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('btn-decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
