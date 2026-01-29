import Link from "next/link";
export default function Header(){
    return <header>
        <nav>
            <Link href="/">Home</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About</Link>    
        </nav>
    </header>;
}