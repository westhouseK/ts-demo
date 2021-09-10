export function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === "string") {
        isValid = isValid && validatableInput.value.length >= validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === "string") {
        isValid = isValid && validatableInput.value.length <= validatableInput.max;
    }
    return isValid;
}
//# sourceMappingURL=validation.js.map