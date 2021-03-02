
export const requiredField = value => {
    if(value) return undefined;
    return 'field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
    if(value && value.length > maxLength) return `maxlength is more then ${maxLength} symbols` ;
    return undefined;
};

export const emailValidator = value => {
    if(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ){
        return  'Invalid email address'
    } return undefined
}

export const confirmPass = (values, allValues) => {
    if(values !== allValues.password )  return 'паролі не співпадають'
    return undefined
}

export const keyValidator = (key) => {

    /* owners key example: 14572-OSRN */
    let keyLength = 10;

    if (key.length === keyLength && key.match(/\d{5}-[A-Z]{4}/g)){
        alert('yes!')
        return undefined
    }   return "ключ невірній"
}



