import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('main-page')}
            <BugButton />
            <Counter />
            <hr style={{ margin: '20px' }} />
            <Input
                value={value}
                onChange={onChange}
                placeholder={t('input-text')}
            />
        </div>
    );
};

export default memo(MainPage);
