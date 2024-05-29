'use client'

import Image from "next/image"
import Link from 'next/link'

export default function Nav() {

    return (
        <nav className="w-full h-14 p-3 flex justify-between items-center fixed z-20">
            <Link href="/#home">
                <Image src="/img/pengu-dark.png" alt="company logo" width={135} height={34} />
            </Link>
            <div className="flex items-center gap-24">
                {/* <div className="relative">
                    <Link className="text-white font-bold bg-black p-4 py-2 rounded-lg hover:bg-blue-600" href="/about">About</Link>
                </div> */}
                <div className="relative">
                    <Link className="hidden text-white font-bold bg-blue-500 p-4 py-2 rounded-lg hover:bg-blue-500 sm:inline" href="/#contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}