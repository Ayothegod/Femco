'use server'

// import { signIn } from '@/auth'
async function signIn(credentials: string, formData: FormData) {
    const formEmail = await formData.get("email")
    const users = [
        { email: "ayodasilva12@gmail.com" },
        { email: "legacyempire8@gmail.com" },
    ]

    users.map(email => {
        if (email.email === formEmail?.toString()) {
            console.log(email.email);
            return email.email
        }
        return new Error("Error then")
    })
    // return email
    return new Error("Error now")
}

export async function authenticate(_currentState: unknown, formData: FormData) {
    try {
        const user = await signIn('credentials', formData)
        console.log(user);
    } catch (error) {
        if (error) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.'
                default:
                    return 'Something went .'
            }
        }
        throw error
    }
}