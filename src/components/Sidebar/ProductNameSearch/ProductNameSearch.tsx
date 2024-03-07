import { ChangeEvent, useState } from 'react';
import styles from './ProductNameSearch.module.scss';

interface ProductNameSearchProps{
  initialValue?: string;
  onChange: (value: string) => void;
}

export function ProductNameSearch({ initialValue = '', onChange }: ProductNameSearchProps) {
  const [value, setValue] = useState(initialValue);

  const onChange_ = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    if (currentValue) {
      setValue(currentValue);
      onChange(currentValue);
    }
  }
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Product name</h3>
      <input type="text" className={styles.input} value={value} onChange={onChange_} />
    </div>
  );
}