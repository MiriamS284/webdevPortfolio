import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Panel for managing the Digital Garden",
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-primary-950 text-primary-100">
      <div className="bg-primary-900 rounded-lg shadow-lg flex flex-col justify-center">
        <ToastContainer />
        <div id="modal-root"></div>
        {children}
      </div>
    </div>
  );
}
