import { ButtonToolbar } from 'rsuite';
import Header from "@components/Header";
import { BiEdit, BiPlusCircle, BiTrash } from "react-icons/bi";
import DeleteModal from '@components/DeleteModal';
import CreateSaleModal from '@components/CreateSaleModal';
import { useState } from 'react';
import EditSaleModal from '@components/CreateSaleModal/EditSaleModal';


export default function Sales() {
    const [isModalCreateSaleOpen, setIsModalCreateSaleOpen] = useState(false);
    const [isModalEditSaleOpen, setIsModalEditSaleOpen] = useState(false);
    const [isModalDeleteSaleOpen, setIsModalDeleteSaleOpen] = useState(false);

    const handleOpenCreateSaleModal = () => {
        setIsModalCreateSaleOpen(true);
    };

    const handleOpenDeleteSaleModal = () => {
        setIsModalDeleteSaleOpen(true);
    }

    const handleOpenEditSaleModal = () => {
        setIsModalEditSaleOpen(true);
    }

    const handleCloseCreateSaleModal = () => {
        setIsModalCreateSaleOpen(false);
    };

    const handleCloseDeleteSaleModal = () => {
        setIsModalDeleteSaleOpen(false);
    }

    const handleCloseEditSaleModal = () => {
        setIsModalEditSaleOpen(false);
    }

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
                    <ButtonToolbar>
                        <button
                            onClick={handleOpenCreateSaleModal}
                            className="bg-slate-900 text-white px-5 py-[10px] shadow-md text-sm font-semibold flex items-center justify-center gap-2 rounded-lg hover:opacity-90"
                        >
                            <BiPlusCircle size={20} />
                            Nova Venda
                        </button>
                    </ButtonToolbar>
                    <CreateSaleModal open={isModalCreateSaleOpen} onClose={handleCloseCreateSaleModal} />
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
                                    <ButtonToolbar>
                                        <button
                                            onClick={handleOpenEditSaleModal}
                                            className="hover:text-slate-900"
                                        >
                                            <BiEdit size={20} />
                                        </button>
                                    </ButtonToolbar>
                                    <EditSaleModal open={isModalEditSaleOpen} onClose={handleCloseEditSaleModal} />
                                    <ButtonToolbar>
                                        <button className="hover:text-red-500" onClick={handleOpenDeleteSaleModal}>
                                            <BiTrash size={20} />
                                        </button>
                                    </ButtonToolbar>
                                    <DeleteModal
                                        open={isModalDeleteSaleOpen}
                                        onClose={handleCloseDeleteSaleModal}
                                        title='Deletar venda'
                                        description='Tem certeza que deseja deletar esta venda?'
                                    />
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
                                    <button className="hover:text-red-500" onClick={handleOpenDeleteSaleModal}>
                                        <BiTrash size={20} />
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}