 export function Input({
    onChange,
    placeholder,
  }: {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  }) {
    return (
      <div className="flex flex-col">
        <input
          type="text"
          onChange={onChange}
          className="border-2 border-slate-400 rounded-md p-2 m-2"
          placeholder={placeholder}
        />
      </div>
    );
  }
  