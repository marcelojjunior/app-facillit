import { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from "react-icons/ai";


export default function DeleteModal() {
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
        <div className="w-full flex flex-col items-center gap-5 p-10">
          <p>Delete</p>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
