/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('login')}
            </Button>
            <Modal isOpen={isAuthOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                consectetur praesentium quisquam fugiat esse aspernatur adipisci
                necessitatibus, et facere quia, quod distinctio doloremque at ut
                ullam asperiores iste saepe! Alias rerum omnis modi ipsum atque.
                Nostrum libero earum qui! Ipsam, blanditiis eaque impedit dicta
                deserunt eligendi rerum reprehenderit pariatur iusto!
            </Modal>
        </div>
    );
};
