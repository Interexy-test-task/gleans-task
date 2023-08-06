// 'use client';

export default function Page() {
  return (
    <div
      className="
        absolute top-0 left-0
        h-full w-full
        backdrop-blur-xl
        flex md:justify-center items-end md:items-center opacity-1"
    >
      <div
        className="
          absolute
          bg-[#151515]/80 rounded-t-[43px] md:rounded-b-[43px]
          w-full md:w-[430px]
          px-5 md:px-12 py-14 md:py-9
          animate-appear"
      >
        <h2 className="text-white/50 text-3xl text-center mb-14">
          Add content
        </h2>
        <p className="text-sm text-center">
          <b>Powered by Gleans Ai</b> ✨ Create content automatically and make
          changes if needed.
        </p>
      </div>
    </div>
  );
}
