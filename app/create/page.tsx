import Link from "next/link";
import FormRegister from "../components/register/form";

export default function Create() {
  return (
    <main className="flex flex-col gap-4 h-screen justify-center items-center">
      <div className="flex-col flex w-64 h-64 relative gap-4">
        <p className="text-xl">
          Crie sua<span className="text-yellow-500"> conta</span>
        </p>
        <FormRegister />
        <Link
          href="/"
          className="text-sm bottom-0 absolute text-gray-400 hover:text-black"
        >
          Eu tenho uma conta
          <span className="text-yellow-500 "> !!</span>
        </Link>
      </div>
    </main>
  );
}
