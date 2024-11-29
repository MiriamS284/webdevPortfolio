import Header from "../../_components/Header";
import Sidebar from "../../_components/Sidebar";
import Footer from "../../_components/Footer";
import { MobileProvider } from "../../_context/MobileContext";

export default function PublicLayout({ children }) {
  return (
    <MobileProvider>
      <div className="flex min-h-screen">
        <div className="fixed top-0 left-0 h-screen w-64">
          <Sidebar />
        </div>

        <div className="flex flex-col flex-1 ml-64 min-h-screen">
          <Header />

          <main className="flex-1 p-8 bg-primary-900 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </MobileProvider>
  );
}
