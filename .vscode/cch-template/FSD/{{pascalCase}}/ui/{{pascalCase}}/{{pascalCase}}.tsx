import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './{{pascalCase}}.module.scss';
import { {{pascalCase}} } from '../../model/types/{{camelCase}}';

interface {{pascalCase}}Props {
    className?: string;
   
}

export const {{pascalCase}} = (props: {{pascalCase}}Props) => {
    const { t } = useTranslation('profile');

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
         Component {{pascalCase}} rednered
        </div>
    );
};
