'use server'

// import { signIn } from '@/auth'
async function signIn(credentials: string, formData: FormData) {
    const email = await formData.get("email")
    // const users = [
    //     { email: "ayodasilva12@gmail.com" },
    //     { email: "legacyempire8@gmail.com" },
    // ]

    // users.map(email => {

    // })
    return email
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
                    return 'Something went wrong.'
            }
        }
        throw error
    }
}