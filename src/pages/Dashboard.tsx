import Header from '@components/Header'
import { MdAttachMoney } from 'react-icons/md';
import { BsBarChartLine, BsPeople } from 'react-icons/bs';
import { BiBuildings } from 'react-icons/bi';
import LineChart from '@components/LineChart';

export default function Dashboard() {
    return (
        <main className='flex flex-col p-5 w-full'>
            <Header title='Dashboard' />
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 mt-10">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <MdAttachMoney size={30} />
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased text-sm leading-normal font-normal text-blue-gray-600">
                            Vendas de Hoje
                        </p>
                        <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900">
                            R$ 12.000
                        </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">
                                +55%
                            </strong>
                            &nbsp; do que ontem
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <BsPeople size={30} />
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased text-sm leading-normal font-normal text-blue-gray-600">
                            Total vendas de hoje
                        </p>
                        <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900">
                            34
                        </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">
                                +3%
                            </strong>
                            &nbsp; do que ontem
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <BiBuildings size={30} />
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased text-sm leading-normal font-normal text-blue-gray-600">
                            Vendas últimos 7 dias
                        </p>
                        <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900">
                            R$ 20.000
                        </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-red-500">
                                -2%
                            </strong>
                            &nbsp; do que os últimos 7 dias
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <BsBarChartLine size={30} />
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased text-sm leading-normal font-normal text-blue-gray-600">
                            Vendas últimos 30 dias
                        </p>
                        <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900">
                            R$ 54.234,50
                        </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">
                                +5%
                            </strong>
                            &nbsp; do que no mês passado
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full mb-12 grid gap-y-10 gap-x-6 md:grid-cols-1 xl:grid-cols-2'>
                <div
                    className='bg-white rounded-xl h-[350px] shadow-md p-4'
                >

                    <LineChart />
                </div>
                <div
                    className='bg-white rounded-xl h-[350px] shadow-md p-4'
                >

                    <LineChart />
                </div>
            </div>
        </main>
    )
}