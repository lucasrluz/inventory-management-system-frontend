import { InputComponenet } from "./InputComponent";

export default function SignIn() {
  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-tr from-gray-900 via-slate-950 to-slate-900">
      <div className="flex w-full flex-col items-end">
        <a className="mr-4 mt-2" href="/signup">
          Sign Up
        </a>
      </div>

      <div className="mt-40 flex w-full min-w-max max-w-md flex-col items-center rounded-3xl bg-slate-800">
        <h1 className="mt-4 text-3xl font-bold">Sign In</h1>

        <InputComponenet placeholder="Email" />
        <InputComponenet placeholder="Password" />

        <button className="mb-4 mt-4 h-11 w-64 rounded-xl bg-gradient-to-tr from-blue-800 to-sky-500 font-bold">
          Sign In
        </button>
      </div>
      <a className="mt-4" href="">
        Create Demo Account
      </a>
    </main>
  );
}
