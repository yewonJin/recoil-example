import { ReactNode } from "react";

export default function TodoList({children}: {children: ReactNode}) {
    return (
       <ul className="w-full h-[600px] mt-8 flex flex-col gap-4 text-xl text-neutral-700">
         {children}
       </ul>
    );
}