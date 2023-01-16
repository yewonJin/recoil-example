
export default function DateForm() {
   const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date()).split(',');

   return (
      <div className="w-full pb-5 flex justify-between items-center border-b-2 border-rose-800">
         <div className="flex gap-1">
            <h2 className="text-3xl text-black font-SF-Pro-Display-Semibold">{date[1].slice(1, 4).toUpperCase()}</h2>
            <h3 className="text-base text-black font-SF-Pro">{date[1].slice(-2)}</h3>
         </div>
         <h3 className="text-2xl text-black font-SF-Pro-Display-Semibold">{date[0]}</h3>
      </div>
   );
}
