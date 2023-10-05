import buildingSvg from '@assets/building.svg'

export default function Dashboard() {
    return (
        <main className='flex flex-col gap-8 h-screen w-full justify-center items-center'>
            <h1
                className='font-bold text-4xl'
            >
                Dashboard em desenvolvimento...
            </h1>
            <img
                className='w-96'
                src={buildingSvg} 
                alt="Building" 
            />
        </main>
    )
}