export function InputComponenet({ placeholder }: { placeholder: string }) {
  return (
    <input
      className="mt-4 h-11 w-96 rounded-xl border-0 border-slate-700 bg-slate-700 pl-4 shadow-2xl"
      type="text"
      placeholder={placeholder}
    />
  );
}
