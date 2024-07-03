
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form className="w-full"
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="btn glass min-h-8 w-full rounded-full">LogIn</button>
    </form>
  )
} 