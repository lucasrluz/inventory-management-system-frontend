import { InputComponenet } from "./InputComponent";

export default function SignUp() {
  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-tr from-gray-900 via-slate-950 to-slate-900">
      <div className="flex w-full flex-col items-end">
        <a className="mr-4 mt-2" href="/signin">
          Sign In
        </a>
      </div>

      <div className="mt-40 flex w-full min-w-max max-w-md flex-col items-center rounded-3xl bg-slate-800">
        <h1 className="mt-4 text-3xl font-bold">Sign Up</h1>

        <InputComponenet placeholder="First name" />
        <InputComponenet placeholder="Last name" />
        <InputComponenet placeholder="Email" />
        <InputComponenet placeholder="Password" />

        <button className="mb-4 mt-4 h-11 w-64 rounded-xl bg-gradient-to-tr from-blue-800 to-sky-500 font-bold">
          Sign Up
        </button>
      </div>
      <a className="mt-4" href="">
        Create Demo Account
      </a>
    </main>
  );
}
