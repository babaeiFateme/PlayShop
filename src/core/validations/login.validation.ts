import * as yup from 'yup'

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    // password: yup.string().required().min(6,'must be at least 6 characters long').matches(passwordRules, { message: "Please create a stronger password" }),
})

export default loginSchema