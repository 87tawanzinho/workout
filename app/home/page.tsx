import WorkoutAndData from "../components/WorkoutAndData";
import Metas from "../components/Metas";
import { useEffect, useState } from "react";
export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-4xl">
        <WorkoutAndData />
        <Metas />
      </div>
    </div>
  );
}
