import { ChangeEvent } from "react";
import styles from "./BrandSelect.module.scss";

interface BrandSelectProps {
  value?: string;
  brands: string[];
  onChange: (value: string) => void;
}

export function BrandSelect({ value="default brand", brands, onChange }: BrandSelectProps) {
  const onChange_ = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "default brand") onChange("");
    else onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Brand</h3>
      <select className={styles.select} value={value} onChange={onChange_}>
        <option className={styles.option} value={"default brand"}>
          Any brand
        </option>
        {brands.map((brand) => (
          <option className={styles.option} value={brand} key={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
