import News from "@/components/sections/news";
import HomeSections from "@/components/specific-pages/home/home-sections";
import WithSidebar from "@/components/ui/with-sidebar";

export default function Home() {
  return (
    <WithSidebar sidebarContent={() => <News />}
    >
      <div className="flex min-h-screen flex-col justify-between py-20">
        <HomeSections />
      </div>
    </WithSidebar>
  );
}
