import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col gap-4 h-screen justify-center items-center">
      <div className="flex-col flex w-64 h-48 relative gap-4">
        <p className="text-xl">
          Organize your <span className="text-yellow-500">workouts</span>
        </p>
        <input type="text" placeholder="user" className="p-2 rounded" />
        <input type="password" placeholder="password" className="p-2 rounded" />
        <Link href="/home">
          <button className="p-2  absolute end-0 bottom-0 bg-yellow-500 text-black rounded hover:bg-yellow-400 ">
            Sign in
          </button>
        </Link>
        <Link
          href="/create"
          className="text-sm bottom-0 absolute text-gray-400 hover:text-gray-200"
        >
          <span className="text-yellow-500 hover:text-gray-200">Create</span> a
          new account
        </Link>
      </div>
    </main>
  );
}
