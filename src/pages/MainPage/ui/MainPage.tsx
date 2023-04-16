import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('main-page')}
            <hr />
            <BugButton />
        </div>
    );
};

export default memo(MainPage);
