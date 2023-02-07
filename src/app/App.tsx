/* eslint-disable i18next/no-literal-string */
import { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button type="button" onClick={() => setIsOpen(true)}>
                    toggle
                </button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum consectetur praesentium quisquam fugiat esse
                    aspernatur adipisci necessitatibus, et facere quia, quod
                    distinctio doloremque at ut ullam asperiores iste saepe!
                    Alias rerum omnis modi ipsum atque. Nostrum libero earum
                    qui! Ipsam, blanditiis eaque impedit dicta deserunt eligendi
                    rerum reprehenderit pariatur iusto!
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
