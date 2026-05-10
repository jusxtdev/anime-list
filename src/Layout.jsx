import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
    return <div className="min-h-screen w-full overflow-x-hidden bg-[#0A0A0A] text-[#D4CEC6]">
        <Header />
        <Outlet />
        <Footer />
    </div>;
}

export default Layout;