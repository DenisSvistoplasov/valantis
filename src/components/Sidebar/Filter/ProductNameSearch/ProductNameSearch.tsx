import { ChangeEvent, useCallback, useEffect, useState } from "react";
import styles from "./ProductNameSearch.module.scss";
import { debounce } from "../../../../utils/debounce";
import { SEARCH_COOLDOWN } from "../../../../constants/searchCooldown";

interface ProductNameSearchProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

export function ProductNameSearch({
  initialValue = "",
  onChange,
}: ProductNameSearchProps) {
  const [value, setValue] = useState(initialValue);

  const debouncedOnChange = useCallback(debounce(onChange, SEARCH_COOLDOWN), [
    onChange,
    SEARCH_COOLDOWN,
  ]);

  const onChange_ = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setValue(currentValue);
    debouncedOnChange(currentValue);
  };

  useEffect(() => {
    if (initialValue !== value) setValue(initialValue);
  },[initialValue])

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Product name</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="Golden..."
        value={value}
        onChange={onChange_}
      />
    </div>
  );
}
