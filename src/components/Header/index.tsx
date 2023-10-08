interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <>
            <header
                className="w-full mb-4"
            >
                <p
                    className="text-3xl font-bold text-slate-900"
                >
                    {title}
                </p>
            </header>
        </>
    )
}