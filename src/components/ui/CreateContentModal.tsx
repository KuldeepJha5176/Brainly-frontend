import { CrossIcon } from "../../Icons/CrossIcon";
import { useRef , useState} from "react";
import { Button } from "./Button";
import { Input } from "../Input";
import { useClickOutside } from "../../hooks/useClickOutside";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}
export function CreateContentModal({ open, onClose }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
        link,
        title,
        type
    }, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })

    onClose();

}

  // Close the modal when clicking outside of it
  useClickOutside(modalRef, onClose);

  return (
    <div>
      {open && <div>
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
              <Input reference={titleRef} placeholder={"Title"} />
              <Input reference={linkRef} placeholder={"Link"} />
              </div>
              <div>
                            <h1>Type</h1>
                            <div className="flex gap-1 justify-center pb-2">
                                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Youtube)
                                }}></Button>
                                <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Twitter)
                                }}></Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} variant="primary" text="Submit" />
                        </div>
                    </span>
                </div>     
            </div>
            
        </div>}
    </div>
  );
    }