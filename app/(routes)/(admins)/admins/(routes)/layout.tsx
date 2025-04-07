
import Container from "@/components/ui/container";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { AppContextProvider } from "@/contexts/App";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <AppContextProvider>
      <div className="flex h-dvh overflow-hidden">
        <Sidebar />

        <div className="w-full relative overflow-y-auto">
          <Header />

          <main className="pt-6 pb-8">
            <Container>{children}</Container>
          </main>
        </div>
      </div>
    </AppContextProvider>
  );
}
