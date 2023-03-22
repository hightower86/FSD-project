import { profileReducer } from 'entities/Profile';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <ProfileCard />
    </DynamicModuleLoader>
);
export default ProfilePage;
