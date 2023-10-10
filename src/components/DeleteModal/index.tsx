import { BiPlusCircle } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { Modal } from 'rsuite';

interface ModalContentProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}


export default function DeleteModal({ open, onClose, title, description }: ModalContentProps) {

  return (
    <Modal open={open} onClose={onClose} size='xs'>
      <Modal.Header>
        <Modal.Title><p className='text-2xl font-bold'>{title}</p></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='flex flex-col gap-3'>
          <p>
            {description}
          </p>
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
            className='bg-red-500 text-white px-3 py-[7px] shadow-md text-xs font-semibold flex items-center justify-center gap-2 rounded-lg hover:opacity-90'
          >
            <BiPlusCircle size={20} />
            Apagar Venda
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
