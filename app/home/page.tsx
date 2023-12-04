export default function Home() {
  return (
    <main className="flex flex-col items-center pt-4">
      <div className="w-5/6 relative max-w-2xl ">
        <p className="text-xl absolute end-0">Hi, 87Taw 💪🫡</p>

        {/* workouts and add*/}
        <div className="flex justify-between  items-center mt-24">
          <div>
            <h2 className="text-xl">
              My <span className="text-yellow-500">Workouts</span>
            </h2>
          </div>

          <div>
            <p className="text-4xl cursor-pointer" title="add">
              +
            </p>
          </div>
        </div>
        {/* workouts and add*/}

        <div className="flex justify-between mt-4 text-sm text-zinc-500">
          <div className="flex-col">
            <p>Trained</p>
          </div>
          <div className="flex-col">
            <p>Data</p>
          </div>
        </div>
      </div>
    </main>
  );
}
