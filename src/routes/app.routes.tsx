import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'

import {
    Login,
    Dashboard,
    Sales,
} from './routes'
import DefaultLayout from 'layouts/DefaultLayout'

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Outlet />}>
            <Route index element={<Login />} />
            {/* <Route path='password/forget' element={<Forget />} />
            <Route path='password/reset' element={<Reset />} /> */}

            <Route element={<ProtectedRoutes />} >
                {/* Protected routes */}
                <Route path="dashboard" element={<DefaultLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>

                <Route path="sales" element={<DefaultLayout />}>
                    <Route index element={<Sales />} />
                </Route>
            </Route>

        </Route>
    )
)