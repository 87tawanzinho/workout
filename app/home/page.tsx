import axios from "axios";
import WorkoutAndData from "../components/WorkoutAndData";
import Metas from "../components/Metas";
export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-2xl">
      <WorkoutAndData />
      <Metas/>
      </div>
    </div>
  );
}
