import React, { ChangeEvent, useState } from 'react';

import { ReturnComponentType } from '../../../types';
import { SuperSelect } from '../SuperSelect';

import styles from './PageSizeSelector.module.css';
import { PageSizeSelectorPropsType } from './types';

export const PageSizeSelector: React.FC<PageSizeSelectorPropsType> = ({
  pageCount,
  handler,
  totalCount,
}): ReturnComponentType => {
  const arr: number[] = [8, 10, 20, 50];

  const [value, setValue] = useState(pageCount);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = +e.currentTarget.value;
    setValue(value);
    handler(value);
  };

  return (
    <div className={styles.containerSelector}>
      <p>Show</p>
      <SuperSelect
        totalCount={totalCount}
        options={arr}
        value={value}
        onChange={onChangeHandler}
      />
      <p>Cards per Page</p>
    </div>
  );
};
