import Link from "next/link";

import FormLogin from "./components/login/form";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 h-screen justify-center items-center">
      <div className="flex-col flex w-64 h-48 relative gap-4">
        <p className="text-xl">
          Organize your <span className="text-yellow-500">workouts</span>
        </p>
        <FormLogin />
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
