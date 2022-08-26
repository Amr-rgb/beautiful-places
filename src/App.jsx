function App() {
  return (
    <div className="container mx-auto px-4 flex flex-col justify-center h-screen min-h-[850px] relative">
      <div>
        <div className="space-y-8">
          <h1 className="text-[calc(1rem+5vw)] leading-tight md:text-6xl md:leading-tight">
            See The Most
            <br /> Beautiful Places
          </h1>
          <div className="flex space-x-2 font-['Poppins']">
            <button className="rounded-xl py-[15px] px-[50px] bg-[#2F2820] text-white">
              Set A Plan
            </button>
            <button className="rounded-xl px-[15px] aspect-square text-center bg-[#9E9A7D] text-white">
              <img src="/assets/play.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="-z-10 absolute inset-0 opacity-50 md:opacity-100">
          <div className="absolute top-20 left-5 bg-[url(/assets/img1.jpg)] bg-cover bg-center w-40 h-48 md:scale-125 md:origin-left xl:scale-150"></div>
          <div className="absolute top-[35%] right-5 bg-[url(/assets/img2.jpg)] bg-cover bg-center w-52 h-72 md:scale-125 md:origin-right xl:scale-150"></div>
          <div className="absolute top-[70%] left-[15%] bg-[url(/assets/img3.jpg)] bg-cover bg-center w-44 h-40 md:scale-125 md:origin-left xl:scale-150"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
