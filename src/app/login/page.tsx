// import { authenticate } from "@/lib/actions/authActions"

// export default function Page() {
//   return (
//     <form action={authenticate}>
//       <input type="email" name="email" placeholder="Email" required />
//       <input type="password" name="password" placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   )
// }

'use client'
 
import { authenticate } from "@/lib/actions/authActions"
import { useFormState, useFormStatus } from 'react-dom'
 
export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
 
  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  )
}
 
function LoginButton() {
  const { pending } = useFormStatus()
 
  const handleClick = (event) => {
    if (pending) {
      event.preventDefault()
    }
  }
 
  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  )
}