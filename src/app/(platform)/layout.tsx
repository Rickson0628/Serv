import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/platform/Header";
import { ReactNode } from "react";


const PlatformLayout = ({children}:{children: ReactNode}) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PlatformLayout;