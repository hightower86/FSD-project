import { memo, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
});
