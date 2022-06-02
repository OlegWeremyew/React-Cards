import React, {KeyboardEvent} from 'react';
import styles from './SuperTextArea.module.css';
import {SuperTextareaTextPropsType} from "./types";
import {ReturnComponentType} from "../../../types";

export const SuperTextArea: React.FC<SuperTextareaTextPropsType> = (
    {
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        ...restProps
    }
): ReturnComponentType => {
    const onChangeCallback = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        onChange
        && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
        onKeyPress && onKeyPress(e);
        onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    const finalAreaClassName = `${styles.superTextArea} ${error && styles.errorTextArea} ${className}`

    return (
        <>
            <div className={styles.inputContainer}>
                <textarea
                    maxLength={500}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalAreaClassName}

                    {...restProps}
                />
            </div>
        </>
    )
};