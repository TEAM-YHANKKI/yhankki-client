import { useState } from 'react';

interface DropDownProps {
  options: { id: string; label: string }[];
  initialValue: { id: string; label: string };
  onSelect: (id: string) => void;
}

const DropDown = ({ options, initialValue, onSelect }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {initialValue.label}
      </button>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => {
                onSelect(option.id);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
