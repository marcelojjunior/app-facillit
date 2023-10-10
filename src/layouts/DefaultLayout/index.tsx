
import SideBar from '@components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className="font-poppins w-full relative">
      <div className="flex w-full h-full">
        <SideBar />
        <main className="w-full lg:ml-60">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
