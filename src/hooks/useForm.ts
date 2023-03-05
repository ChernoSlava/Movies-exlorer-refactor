import { useCallback, useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';

export function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isEmptiness, setIsEmptiness] = useState(false);

  const handleChange = (target: HTMLInputElement ) => {
    // const input = e.target as HTMLInputElement;
    const { name, value } = target;

    if (name === 'email') {
      if (!isEmail(value)) {
        target.setCustomValidity('Указана некорректная почта');
      } else {
        target.setCustomValidity('');
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsEmptiness(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, moreEmptiness = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsEmptiness(moreEmptiness);
    },
    [setValues, setErrors, setIsEmptiness],
  );
  return {
    values,
    handleChange,
    resetForm,
    errors,
    isEmptiness,
    setIsEmptiness,
  };
}
