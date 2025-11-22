// "use client";

import Link from 'next/link'
// import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}