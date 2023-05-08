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
import { sendComment } from '../../model/services/sendComment/sendComment';

export interface AddCommentFormProps {
    className?: string;
    // onSendComment: (text: string) => void;
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const reducers: ReducersList = {
        addCommentForm: addCommentFormReducer,
    };

    const onSendHandler = useCallback(() => {
        // dispatch(onSendComment(text));
        dispatch(sendComment());
        onCommentTextChange('');
    }, [dispatch, onCommentTextChange]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('input-comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                    {t('send-comment')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
