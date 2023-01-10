import { ReactNode } from "react";

export default function Template({children}: {children: ReactNode}) {
   return <div className="w-[650px] h-[750px] relative flex flex-col items-center mt-[150px] mx-auto p-8 font-SF-Pro bg-white">{children}</div>;
}
