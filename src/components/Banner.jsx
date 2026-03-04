import vectorImg from "../assets/vector1.png";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="px-6 py-8 bg-gray-100">
      <div className="flex gap-6">
        
        {/* In-Progress Card */}
        <div
          className="relative flex-1 rounded-2xl overflow-hidden flex flex-col items-center justify-center py-14"
          style={{
            background: "linear-gradient(135deg, #422AD5 0%, #7C3AED 100%)",
        }}
        >
          {/* Vector Left Bottom */}
          <img
            src={vectorImg}
            alt=""
            className="absolute bottom-0 left-0 w-48 opacity-40 rotate-180"
          />
          {/* Vector Right Top */}
          <img
            src={vectorImg}
            alt=""
            className="absolute top-0 right-0 w-48 opacity-40"
          />

          <p className="text-white text-lg font-medium z-10">In-Progress</p>
          <p className="text-white text-6xl font-bold z-10 mt-2">
            {inProgressCount}
          </p>
        </div>

        {/* Resolved Card */}
        <div
          className="relative flex-1 rounded-2xl overflow-hidden flex flex-col items-center justify-center py-14"
          style={{
            background: "linear-gradient(135deg, #0A8A5A 0%, #16A869 100%)",
        }}
        >
          {/* Vector Left Bottom */}
          <img
            src={vectorImg}
            alt=""
            className="absolute bottom-0 left-0 w-48 opacity-40 rotate-180"
          />
          {/* Vector Right Top */}
          <img
            src={vectorImg}
            alt=""
            className="absolute top-0 right-0 w-48 opacity-40"
          />

          <p className="text-white text-lg font-medium z-10">Resolved</p>
          <p className="text-white text-6xl font-bold z-10 mt-2">
            {resolvedCount}
          </p>
        </div>

      </div>
    </div>
  );
}