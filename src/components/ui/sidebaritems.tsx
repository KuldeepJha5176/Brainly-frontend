export function SidebarItems( {text,Icons}:{
    text:string,
    Icons:ReactElement
} ) {
    return (
        
        <div className="flex text-gray-700 ">
            <div className="p-2">
                {Icons}
            </div>
            <div className="p-2 flex flex-col">
                {text}
            </div>
            
        </div>
    );
}