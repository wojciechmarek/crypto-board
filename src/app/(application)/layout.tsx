import { Navbar } from "@cb/components/organisms/application";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
