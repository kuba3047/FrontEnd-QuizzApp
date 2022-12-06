/* eslint-disable @next/next/no-img-element */
export default function GlobalNetwork() {
  return (
    <section className="max-w-7xl mx-auto text-dark-blue body-font">
      <div className="md:w-11/12 px-5 py-24 mx-auto md:flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto w-2/3 md:content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="mb-2 font-bold text-3xl">
              Join our global networks
            </h1>
            <div className="leading-relaxed ">
              A highly engaged industry network with seniority, relevance and
              decision-making capacity.
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="h-[210px] w-[235px] flex rounded-2xl shadow-lg items-center ">
              <div className=" w-32 ml-10 flex flex-col gap-10">
                <h1 className="text-[#A4D0DB] text-3xl font-bold">25/25</h1>
                <p className="text-gray-700 text-md">{`Top globar R&D-intensive firms`}</p>
              </div>
            </div>
            <div className="h-[210px] w-[235px] flex rounded-2xl shadow-lg items-center ">
              <div className=" w-32 ml-10 flex flex-col gap-10">
                <h1 className="text-[#A4D0DB] text-3xl font-bold">25/25</h1>
                <p className="text-gray-700 text-md">{`Top globar R&D-intensive firms`}</p>
              </div>
            </div>
            <div className="h-[210px] w-[235px] flex rounded-2xl shadow-lg items-center">
              <div className=" w-32 ml-10 flex flex-col gap-10">
                <h1 className="text-[#A4D0DB] text-3xl font-bold">25/25</h1>
                <p className="text-gray-700 text-md">{`Top globar R&D-intensive firms`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="/globe.png"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
}
