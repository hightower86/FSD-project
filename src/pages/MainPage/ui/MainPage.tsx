import { Counter } from 'entities/Counter';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            <Counter />
            <hr style={{ margin: '20px' }} />
            <Input
                value={value}
                onChange={onChange}
                placeholder="Введите текст"
            />
        </div>
    );
};

export default MainPage;
