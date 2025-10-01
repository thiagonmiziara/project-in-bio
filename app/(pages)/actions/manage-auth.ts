"use server";
import { auth, signIn, signOut } from "@/app/lib/auth"
import { redirect } from "next/navigation"

export async function manageAuth() {
    const session = await auth()

    if (!session) {
        // Usuário não autenticado - fazer login
        await signIn("google", {
            redirectTo: "/criar"
        })
        return
    }

    // Usuário já autenticado - fazer logout
    await signOut({
        redirectTo: "/"
    })
}