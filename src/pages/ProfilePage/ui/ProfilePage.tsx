import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
    const { t } = useTranslation('profile');

    return <div>{t('profile-page')}</div>;
};

export default ProfilePage;
