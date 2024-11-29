import GreenhouseLine from "../../_components/HouseCanvas";
import Stack from "../../_components/Stack";

export const metadata = {
  title: {
    template: "%s Tech Stack",
    default: "M.S. / Tech Stack",
  },
  description: "Miriam Sparbrod´s Web - Development Tech Stack",
};

export default function Page() {
  return (
    <div className="relative w-full h-screen">
      <GreenhouseLine />

      <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
        <div
          className="relative col-span-2 text-center text-stone-700"
          style={{ top: "5%", left: "25%", width: "50%" }}
        >
          <Stack />
        </div>
      </div>
    </div>
  );
}
