import vectorImg from "../assets/vector1.png";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="px-4 md:px-6 py-6 md:py-8 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">

        {/* In-Progress Card */}
        <div
          className="relative flex-1 rounded-2xl overflow-hidden flex flex-col items-center justify-center py-10 md:py-14"
          style={{
            background: "linear-gradient(135deg, #422AD5 0%, #7C3AED 100%)",
          }}
        >
          <img
            src={vectorImg}
            alt=""
            className="absolute bottom-0 left-0 w-36 md:w-48 opacity-40 rotate-180"
          />
          <img
            src={vectorImg}
            alt=""
            className="absolute top-0 right-0 w-36 md:w-48 opacity-40"
          />
          <p className="text-white text-lg font-medium z-10">In-Progress</p>
          <p className="text-white text-5xl md:text-6xl font-bold z-10 mt-2">
            {inProgressCount}
          </p>
        </div>

        {/* Resolved Card */}
        <div
          className="relative flex-1 rounded-2xl overflow-hidden flex flex-col items-center justify-center py-10 md:py-14"
          style={{
            background: "linear-gradient(135deg, #0A8A5A 0%, #16A869 100%)",
          }}
        >
          <img
            src={vectorImg}
            alt=""
            className="absolute bottom-0 left-0 w-36 md:w-48 opacity-40 rotate-180"
          />
          <img
            src={vectorImg}
            alt=""
            className="absolute top-0 right-0 w-36 md:w-48 opacity-40"
          />
          <p className="text-white text-lg font-medium z-10">Resolved</p>
          <p className="text-white text-5xl md:text-6xl font-bold z-10 mt-2">
            {resolvedCount}
          </p>
        </div>

      </div>
    </div>
  );
}