import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const MainWindow = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default MainWindow;