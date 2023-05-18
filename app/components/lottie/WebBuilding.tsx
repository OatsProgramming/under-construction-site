'use client'

import webBuilding from '@/lib/lottie/webBuilding.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => 
    import('lottie-react'),
    { ssr: false }
)

export default function WebBuilding() {
    return <Lottie animationData={webBuilding} loop={true}/>
}
