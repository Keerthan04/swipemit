import SidebarComp from "@/components/profile-components/sidebarcomp";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarComp />
      <main className="w-full h-full">
        <div className="flex justify-between px-3 py-2 border-b-2 border-gray-300">
          <SidebarTrigger />
          <h1 className="text-2xl font-semibold px-2">SwipeMIT</h1>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
