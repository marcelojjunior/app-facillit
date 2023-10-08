import { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from "react-icons/ai";
import { BiPlusCircle } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import DateRangerPicker from '@components/DatePicker';


export default function CreateSaleModal() {
  const closeButton = useRef<HTMLButtonElement>(null);

  return (
    <Dialog.Portal>
      <Dialog.Overlay
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          zIndex: '10',
        }}
      />
      <Dialog.Content
        forceMount
        className={'z-40 w-96 rounded-lg p-4 top-1/2 left-1/2 fixed bg-white transform -translate-x-1/2 -translate-y-1/2'}
      >
        <Dialog.Close ref={closeButton} className={'absolute top-4 right-8'}>
          <AiOutlineClose />
        </Dialog.Close>
        <div className="w-full flex flex-col gap-2 pt-4">
          <h1
            className="text-xl font-bold text-slate-900"
          >
            Título
          </h1>
          <DateRangerPicker 
            typeDate="date"
            dateSelected={null}
            setDateSelected={() => {}}
            setDateRangeSelected={() => {}}
            dateRangeSelected={null}
          />
          <div className='flex gap-2 justify-center mt-2'>
            <button
              onClick={() => closeButton.current?.click()}
              className='bg-white text-slate-800 px-3 py-[7px] shadow-md text-xs font-semibold flex items-center justify-center gap-2 rounded-lg border border-slate-500'
            >
              <MdOutlineCancel size={20} />
              Cancelar
            </button>
            <button
              className='bg-slate-900 text-white px-3 py-[7px] shadow-md text-xs font-semibold flex items-center justify-center gap-2 rounded-lg hover:opacity-90'
            >
              <BiPlusCircle size={20} />
              Criar
            </button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
