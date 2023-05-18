'use client'

import { useRouter } from "next/navigation"

export default function Button({ message, link }: {
    message: string,
    link: string,
}) {
    const router = useRouter()
    return (
        <button onClick={() => router.push(link)}>
            {message}
        </button>
    )
}