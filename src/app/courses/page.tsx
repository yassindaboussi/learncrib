import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CourseBrowser from "@/components/CourseBrowser";

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CourseBrowser />
      </main>
      <SiteFooter />
    </>
  );
}
