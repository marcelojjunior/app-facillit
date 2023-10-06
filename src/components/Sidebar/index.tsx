import { Link } from 'react-router-dom';
import { BiHappyBeaming, BiHomeAlt } from 'react-icons/bi';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { TbReportAnalytics } from 'react-icons/tb';
import { MdExitToApp } from 'react-icons/md';


export default function SideBar() {

  return (
    <aside className="w-60 bg-slate-900 h-screen p-5 pt-8 relative duration-300 flex flex-col justify-between">
      <div>
        <div className="flex gap-x-4 items-center">
          <BiHappyBeaming className="text-3xl text-white" />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200`}
          >
            Facillit
          </h1>
        </div>
        <div className="pt-6">
          <Link
            to={'/dashboard'}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-950 text-gray-300 text-sm items-center gap-x-4 mt-2 `}
          >
            <BiHomeAlt className="text-2xl" />
            <span className={`origin-left`}>
              Dashboard
            </span>
          </Link>
          <Link
            to={'/sales'}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-950 text-gray-300 text-sm items-center gap-x-4 mt-2 `}
          >
            <FaMoneyCheckAlt className="text-2xl" />
            <span className={`origin-left`}>
              Vendas
            </span>
          </Link>
          <Link
            to={''}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-950 text-gray-300 text-sm items-center gap-x-4 mt-2 `}
          >
            <TbReportAnalytics className="text-2xl" />
            <span className={`origin-left`}>
              Relatórios
            </span>
          </Link>
        </div>
      </div>
      <div>
        <Link
          to={'/'}
          className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-950 text-gray-300 text-sm items-center gap-x-4 mt-2 `}
        >
          <MdExitToApp className="text-2xl" />
          <span className={`origin-left`}>
            Sair
          </span>
        </Link>
      </div>
    </aside>
  );
}
