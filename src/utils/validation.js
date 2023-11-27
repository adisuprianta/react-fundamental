export function validateField(value, errorMassage) {
  return value.trim() === '' ? errorMassage : null;
}

export function validateUsername(value, errorMassage) {
    let regex = '^[a-zA-Z0-9.]*$'
    return !value.match(regex) ? errorMassage :null;
}