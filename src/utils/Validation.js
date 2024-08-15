export const CheckedData = (email,password,textname) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const textRegex = /^[a-zA-Z\s]+$/.test(textname);
    if(!textRegex) return "Name is not valid"
    if(!emailRegex) return "Email ID is not Valid";
    if(!passwordRegex) return "Password is not valid"

    return null;
}
