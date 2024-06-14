import MainNavigation from "../components/MainNavigation";

import { Outlet } from "react-router-dom";

function RootLoayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLoayout;
