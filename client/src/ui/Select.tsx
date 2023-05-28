import { ChangeEvent, FC, useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}
interface SelectProps {
  options: SelectOption[];
  onSelect: (selectedValue: string) => void;
}

const Select: FC<SelectProps> = (props) => {
  const { options, onSelect } = props;

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };
  return (
    <select value={selectedValue} onChange={handleChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
