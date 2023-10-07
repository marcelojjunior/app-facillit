import * as Dialog from '@radix-ui/react-dialog';
import Header from "@components/Header";
import { BiEdit, BiPlusCircle, BiTrash } from "react-icons/bi";
import DeleteModal from '@components/DeleteModal';

export default function Sales() {
    return (
        <>
            <main className="p-5">
                <Header title="Vendas" />
                <div className="mb-3 flex justify-end gap-4">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="rounded-lg p-2 bg-slate-200 w-52"
                    />
                    <button className="bg-slate-900 text-white px-5 py-[10px] shadow-md text-sm font-semibold flex items-center justify-center gap-2 rounded-lg hover:opacity-90">
                        Nova Venda
                        <BiPlusCircle size={20} />
                    </button>
                </div>
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-slate-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Dia
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Cliente
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Campanha
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Forma de pagamento
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Valor
                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4">
                                    01/01/2023
                                </th>
                                <th className="px-6 py-4">
                                    Ana maria
                                </th>
                                <td className="px-6 py-4">
                                    Normal
                                </td>
                                <td className="px-6 py-4">
                                    Dinheiro
                                </td>
                                <td className="px-6 py-4">
                                    R$ 120,00
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <button className="hover:text-slate-900">
                                        <BiEdit size={20} />
                                    </button>
                                    <Dialog.Root>
                                        <Dialog.Trigger asChild>
                                            <button className="hover:text-red-500">
                                                <BiTrash size={20} />
                                            </button>
                                        </Dialog.Trigger>
                                        <DeleteModal />
                                    </Dialog.Root>
                                </td>
                            </tr>
                            <tr className="border-b bg-slate-100">
                                <th scope="row" className="px-6 py-4">
                                    01/01/2023
                                </th>
                                <th className="px-6 py-4">
                                    Telma Sousa
                                </th>
                                <td className="px-6 py-4">
                                    Promoção
                                </td>
                                <td className="px-6 py-4">
                                    Crédito <span className="text-xs">(2x)</span>
                                </td>
                                <td className="px-6 py-4">
                                    R$ 240,00
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <button className="hover:text-slate-900">
                                        <BiEdit size={20} />
                                    </button>
                                    <Dialog.Root>
                                        <Dialog.Trigger asChild>
                                            <button className="hover:text-red-500">
                                                <BiTrash size={20} />
                                            </button>
                                        </Dialog.Trigger>
                                        <DeleteModal />
                                    </Dialog.Root>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}