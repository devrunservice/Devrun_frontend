import {useState, useCallback} from 'react';

interface CheckboxState {
  [key: string]: boolean;
}

interface CheckboxGroup {
  checkboxes: CheckboxState;
  handleCheckAll: (checked: boolean) => void;
  handleCheckSingle: (name: string, checked: boolean) => void;
}

const useCheckbox = (initialState: CheckboxState): CheckboxGroup => {
  const [checkboxes, setCheckboxes] = useState<CheckboxState>(initialState);

  const handleCheckAll = useCallback(
    (checked: boolean) => {
      const updatedCheckboxes: CheckboxState = {};
      Object.keys(checkboxes).forEach((key) => {
        updatedCheckboxes[key] = checked;
      });
      setCheckboxes(updatedCheckboxes);
    },
    [checkboxes]
  );

  const handleCheckSingle = useCallback((name: string, checked: boolean) => {
    setCheckboxes((prev) => {
      const updatedCheckboxes = {
        ...prev,
        [name]: checked,
      };

      updatedCheckboxes.allChecked = Object.keys(updatedCheckboxes)
        .filter((key) => key !== 'allChecked')
        .every((key) => updatedCheckboxes[key] === true);

      return updatedCheckboxes;
    });
  }, []);

  return {
    checkboxes,
    handleCheckAll,
    handleCheckSingle,
  };
};

export default useCheckbox;
