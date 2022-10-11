import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [isError, setIsError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setIsError(true);
    };

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    return (
        <Button onClick={onThrow} className={classNames('', {}, [className])}>
            {t('throwError')}
        </Button>
    );
};
