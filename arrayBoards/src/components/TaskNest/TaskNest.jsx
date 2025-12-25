import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import MainDashboard from "../MainDashboard/MainDashboard";

const TaskNest = () => {
    return (
        <>
            <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
                <Sidebar />
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Header />
                    <MainDashboard />
                </div>
            </div>
        </>
    );
}  
export default TaskNest;
