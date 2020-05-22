

export const requiredField = value => {
    if (value) return undefined;
    return 'field is required';
}


export const maxLengthCreator = (MaxLength) => value => {
    if (value && value.length > MaxLength ) return `Max length is ${MaxLength} symbols`;
    return undefined;
}