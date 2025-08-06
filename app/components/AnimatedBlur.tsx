'use client';

const AnimatedBlur = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden flex items-center justify-center">
      {/* Center Wrapper */}
      <div className="relative w-[800px] h-[500px]">
        {/* Blue Circle - top left */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-400 opacity-25 rounded-full blur-[40px] animate-float" />
        
        {/* Pink Circle - top right, more space from blue */}
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-pink-400 opacity-25 rounded-full blur-[40px] animate-float-slower" />

        {/* Purple Circle - bottom center, slightly shifted right */}
        <div className="absolute bottom-0 left-[38%] w-[320px] h-[320px] bg-purple-400 opacity-25 rounded-full blur-[40px] animate-float-slow" />
      </div>
    </div>
  );
};

export default AnimatedBlur;
