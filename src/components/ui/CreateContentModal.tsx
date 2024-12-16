
export function CreateContentModal(open, onClose ) {
    return <div>
        {open && <div className="w-screen h-screen bg-slate-900 bg-opacity-70 fixed top-0 left-0 z-10 flex justify-center items-center flex justify-center items-center">
        <div className="w-1/2 h-1/2 bg-white rounded-lg shadow-md flex flex-col gap-4 p-4 rounded-md">
        Hi there 
        </div>
        </div>}
    </div> 
}