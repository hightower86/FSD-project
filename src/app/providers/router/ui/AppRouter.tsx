import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import {
    AppRoutesProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const renderWithWrapper = (route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );
    return (
        <Route
            key={route.path}
            path={route.path}
            element={
                route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
            }
        />
    );
};

const AppRouter = () => (
    <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
);

export default memo(AppRouter);
