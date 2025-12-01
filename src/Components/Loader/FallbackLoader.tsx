import { Loader } from "lucide-react";

const FallbackLoader = () => {
  return (
    <div className="flex h-screen border-white w-full items-center justify-center text-gray-500">
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-300/60 bg-white/30 px-6 py-4 backdrop-blur">
        <Loader className="animate-spin" size={32} strokeWidth={1.5} />
        <span className="text-sm font-medium text-gray-100">
          Loading guide…
        </span>
      </div>
    </div>
  );
};

export default FallbackLoader;
