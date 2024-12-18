import { CrossIcon } from "../../Icons/CrossIcon";
import { useRef } from "react";
import { Button } from "./Button";
import { useClickOutside } from "../../useClickOutside";

export function CreateContentModal({ open, onClose }) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close the modal when clicking outside of it
  useClickOutside(modalRef, onClose);

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-900 bg-opacity-60 fixed top-0 left-0 z-10 flex justify-center items-center">
          <div className="flex flex-col justify-center">
            <span
              ref={modalRef} // Attach the ref here
              className="bg-white opacity-100 p-4 rounded fixed"
            >
               <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>
              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"link"} />
              </div>
              <div className="flex justify-center">
                <Button variant="primary" text="Submit" onClick={onClose} />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({
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
