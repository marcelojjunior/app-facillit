import DateRangerPicker from '@components/DatePicker';
import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { Modal, SelectPicker, InputNumber } from 'rsuite';

interface ModalContentProps {
  open: boolean;
  onClose: () => void;
}

interface DateRange {
  startDate: string;
  endDate: string;
}

export default function CreateSaleModal({ open, onClose }: ModalContentProps) {
  const [daySelected, setDaySelected] = useState<[Date, Date] | null>(null);
  const [dayRangeSelected, setDayRangeSelected] = useState<DateRange | null>(null);

  const selectModelCampaign = ['Normal', 'Promoção'].map(
    item => ({ label: item, value: item })
  );

  const selectFormPayment = ['Dinheiro', 'PIX', 'Débito', 'Crédito', 'Crédito (2x)', 'Crédito (3x)', 'Crédito (4x)'].map(
    item => ({ label: item, value: item })
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <Modal.Title><p className='text-2xl font-bold'>Nova Venda</p></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='flex flex-col gap-3'>
          <div
            className='grid grid-cols-1'
          >
            <div className='flex flex-col ga-2'>
              <label htmlFor="">Cliente</label>
              <input
                type="text"
                name="client"
                id="client"
                className='rounded-lg p-2 border border-gray-300'
              />
            </div>
          </div>
          <div
            className='grid grid-cols-2 gap-5'
          >
            <div className='flex flex-col ga-2'>
              <label htmlFor="">Dia</label>
              <DateRangerPicker
                typeDate="date"
                dateSelected={daySelected}
                setDateSelected={setDaySelected}
                setDateRangeSelected={setDayRangeSelected}
                dateRangeSelected={dayRangeSelected}
              />
            </div>
            <div className='flex flex-col ga-2'>
              <label htmlFor="">Campanha</label>
              <SelectPicker
                data={selectModelCampaign}
                searchable={false}
                placeholder="Selecione uma campanha"
              />
            </div>
          </div>
          <div
            className='grid grid-cols-2 gap-5'
          >
            <div className='flex flex-col ga-2'>
              <label htmlFor="">Forma de Pagamento</label>
              <SelectPicker
                data={selectFormPayment}
                searchable={false}
                placeholder="Selecione uma forma de pagamento"
              />
            </div>
            <div className='flex flex-col ga-2'>
              <label htmlFor="">Valor</label>
              <InputNumber
                prefix="$"
                min={0}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className='flex gap-2 justify-end'>
          <button
            onClick={onClose}
            className='bg-white text-slate-800 px-3 py-[7px] shadow-md text-xs font-semibold flex items-center justify-center gap-2 rounded-lg border border-slate-500'
          >
            <MdOutlineCancel size={20} />
            Cancelar
          </button>
          <button
            className='bg-slate-900 text-white px-3 py-[7px] shadow-md text-xs font-semibold flex items-center justify-center gap-2 rounded-lg hover:opacity-90'
          >
            <BiPlusCircle size={20} />
            Criar Venda
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
