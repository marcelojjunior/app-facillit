
import { FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    return (
        <>
            <main
                className="bg-slate-900 h-screen flex justify-center items-center"
            >
                <div
                    className="flex flex-col gap-3 items-center bg-slate-50 rounded-lg w-full max-w-lg px-3 py-5"
                >
                    <FaChartBar className="text-6xl text-slate-900" />
                    <h1
                        className="font-bold text-3xl text-slate-900"
                    >
                        Facillit
                    </h1>
                    <form className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Email</label>
                            <input
                                className="rounded-lg p-2 bg-slate-200"
                                type="email" 
                                name="email" 
                                id="email"
                                placeholder="jhondoe@example.com"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Senha</label>
                            <input
                                className="rounded-lg p-2 bg-slate-200"
                                type="password" 
                                name="password" 
                                id="password"
                                placeholder="**********"
                            />
                        </div>
                        <button
                            onClick={() => {
                                navigate('/dashboard');
                            }}
                            className="bg-slate-900 text-white rounded-lg p-2 hover:bg-slate-800"
                        >
                            Entrar
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}