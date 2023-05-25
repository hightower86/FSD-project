import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './{{pascalCase}}.module.scss';

interface {{pascalCase}}Props {
    className?: string;
}

export const {{pascalCase}} = (props: {{pascalCase}}Props) => {
    const { t } = useTranslation('{{camelCase}}');

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.{{camelCase}}, {}, [className])}>
         Component {{pascalCase}} rednered
        </div>
    );
};
