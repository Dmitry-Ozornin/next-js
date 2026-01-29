import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return(
        <div>
            <h1>О нас</h1>
            <ul>
                <li><Link href="/about/contacts">Контакты</Link></li>
                <li><Link href="/about/team">Команда</Link></li>
            </ul>
            {children}
        </div>
    )
}