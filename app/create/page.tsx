import Link from "next/link";
import FormRegister from "../components/register/form";

export default function Create() {
  return (
    <main className="flex flex-col gap-4 h-screen justify-center items-center">
      <div className="flex-col flex w-64 h-64 relative gap-4">
        <p className="text-xl">
          Create a new<span className="text-yellow-500">account</span>
        </p>
        <FormRegister />
        <Link
          href="/"
          className="text-sm bottom-0 absolute text-gray-400 hover:text-gray-200"
        >
          I have account
          <span className="text-yellow-500 hover:text-gray-200"> !!</span>
        </Link>
      </div>
    </main>
  );
}
