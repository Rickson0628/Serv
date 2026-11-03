import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/platform/Header";
import { ReactNode } from "react";
import { CurrentUserProvider } from "@/context/CurrentUserContext";

const PlatformLayout = ({children}:{children: ReactNode}) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <CurrentUserProvider>
        <Header />
        {children}
        <Footer />
      </CurrentUserProvider>
    </div>
  );
};

export default PlatformLayout;