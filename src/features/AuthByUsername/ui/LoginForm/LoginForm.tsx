import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <Button className={cls.btn} size={ButtonSize.M}>
                {t('Войти')}
            </Button>
        </div>
    );
};
