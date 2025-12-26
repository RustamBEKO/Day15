import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import MainDashboard from "../MainDashboard/MainDashboard";
import styles from "./TaskNest.module.scss";

const TaskNest = () => {
    return (
        <>
            <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
                <div className={styles.sideBar}><Sidebar /></div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Header />
                    <MainDashboard />
                </div>
            </div>
        </>
    );
}  
export default TaskNest;
