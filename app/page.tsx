import Link from "next/link";

import FormLogin from "./components/login/form";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 h-screen justify-center items-center">
      <div className="flex-col flex w-64 h-48 relative gap-4">
        <p className="text-xl">
          Organize seus <span className="text-red-600">treinos</span>
        </p>
        <FormLogin />
        <Link
          href="/create"
          className="text-sm bottom-0 absolute text-gray-600 hover:text-gray-900"
        >
          <span className="text-red-600">Crie</span> a sua conta
        </Link>
      </div>
    </main>
  );
}
