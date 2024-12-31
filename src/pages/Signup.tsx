import { useRef } from "react";
import { Input } from "../components/input";
import { Button } from "../components/ui/Button";

export function Signup() {
    const UsernameRef = useRef();
    const PasswordRef = useRef ();

    function signup() {
        const username = UsernameRef.current.value;
        const password = PasswordRef.current.value;

    }
    return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
    <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input ref={UsernameRef} placeholder="Username" />
        <Input ref={PasswordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
            <Button  loading={false} variant="primary" text="Signup" fullWidth={true} />
        </div>
    </div>
</div>
);
}