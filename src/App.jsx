import PageTitle from "./components/PageTitle";
import style from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <div className="container">
        <PageTitle>Todo List</PageTitle>
        <div className={style.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        closeOnClick
        autoClose={2000}
      ></ToastContainer>
    </div>
  );
};

export default App;
