import HomeVistCard from "../Home-vist/home-vist";
import TopSectionCard from "./top-section-card";
import TopSectionText from "./top-section-text";

export default function TopSectionContent() {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-white bg-eagle-green-950">
          <TopSectionText />
          <TopSectionCard />
        </div>
        <div>
          <HomeVistCard />
        </div>
      </div>
    </>
  );
}
