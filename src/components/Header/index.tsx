import { RxHamburgerMenu } from 'react-icons/rx';

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <>
            <header
                className="w-full mb-4 flex justify-between"
            >
                <p
                    className="text-3xl font-bold text-slate-900"
                >
                    {title}
                </p>
                <button
                    className='block lg:hidden'
                >
                    <RxHamburgerMenu size={30} />
                </button>
            </header>
        </>
    )
}