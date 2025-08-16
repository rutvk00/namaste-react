export const checkValidateData = (email, password, name="") => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const isNameValid = name.length === 0 || /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
   
    if(name.length > 0 && !isNameValid) return "Full Name is not valid.";

    if(!isEmailValid) return "Email ID is not valid.";

    if(!isPasswordValid) return "Password is not valid.";

    return null;
}