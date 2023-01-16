import { ReactNode } from "react";

export default function TodoList({children}: {children: ReactNode}) {
    return (
       <ul className="w-full h-[580px] mt-8 flex flex-col gap-4 text-lg text-neutral-700 flex-nowrap overflow-y-auto">
         {children}
       </ul>
    );
}