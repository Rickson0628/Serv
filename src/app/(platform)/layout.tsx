import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/platform/Header";
import { ReactNode } from "react";


const PlatformLayout = ({children}:{children: ReactNode}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PlatformLayout;