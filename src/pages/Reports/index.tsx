import buildingSvg from '@assets/building.svg'

export default function Reports() {
    return (
        <main className='flex flex-col gap-8 h-screen w-full justify-center items-center'>
            <h1
                className='font-bold text-4xl'
            >
                Relatórios em desenvolvimento...
            </h1>
            <img
                className='w-96'
                src={buildingSvg} 
                alt="Building" 
            />
        </main>
    )
}