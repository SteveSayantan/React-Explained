const getFormValues = (form) => {
    const formData = new FormData(form);
  
    const values = [...formData.values()];
    // console.log(values)
    const isEmpty = values.includes('');
    const data = Object.fromEntries(formData);
    return { isEmpty, data };
  };
  
  export default getFormValues;


// We have separated this logic from formData just for the sake of reusability.