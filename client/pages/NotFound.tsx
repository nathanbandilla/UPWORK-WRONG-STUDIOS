import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-8">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan max-w-[100px]" />
          <span className="font-display text-sm tracking-wider">WRONG PAGE</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan max-w-[100px]" />
        </div>

        <h1 className="font-display text-[120px] md:text-[194px] leading-[0.85] tracking-tight text-white/60">
          404
        </h1>

        <h2 className="font-display text-[40px] md:text-[64px] leading-tight">
          PAGE NOT FOUND
        </h2>

        <p className="text-[18px] leading-[34px] text-white/90">
          Looks like you've wandered into the wrong territory. Let's get you back on track.
        </p>

        <Link 
          to="/" 
          className="inline-block bg-cyan text-black px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-cyan/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
