import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/getAddCommentFormSelectors/getAddCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';

export interface AddCommentFormProps {
    className?: string;
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const { t } = useTranslation('articles');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const { className } = props;

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const reducers: ReducersList = {
        addCommentForm: addCommentFormReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.wrapper, {}, [className])}>
                <Input
                    placeholder={t('input-comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button theme={ButtonTheme.OUTLINE}>{t('send-comment')}</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
