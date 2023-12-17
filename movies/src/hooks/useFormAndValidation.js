
import {useState, useCallback, useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js' 

export function useFormAndValidation() {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(true);

  const user = useContext(CurrentUserContext);

  function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element
  
        return { name, value }
      })
      return data
  }

  const profileEditForm = document.getElementById('profile__info')

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: e.target.validationMessage});
    setIsValid(e.target.closest('form').checkValidity());
    if(profileEditForm) {
      const profileForm = serializeForm(profileEditForm)
      const formName = profileForm.find((element) => element.name === 'name').value
      const formEmail = profileForm.find((element) => element.name === 'email').value
      // console.log(formEmail)
      // console.log(user.email)
      if (user.name === formName && user.email === formEmail) {
        setIsValid(false)
      }
    }
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid, setErrors };
}

