type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

export function Input({ label, name, placeholder, type = "text" }: InputProps) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-neutral-800">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-50"
      />
    </label>
  );
}
