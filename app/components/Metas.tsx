import Image from "next/image"
import biceps from "@/public/biceps.jpg"
import giphy from "@/public/giphy.gif"
import TextJSX from "./texts"
export default function Metas() {
    return (
        <div className="text-end  p-8 pt-14 flex flex-col">
          <div className="flex justify-center items-center">
        
<Image 
            src={giphy}
            alt="women training"
            height={200}
            width={200}
            />



          </div  >

           <div className="mt-10">
           <p className="text-xl"><span className="font-bold">Metas</span> e anotações</p>
           <p className="text-xs text-gray-400">coloque seus sonhos e objetivos por aqui!

           </p>
           <div className="ml-4">
           <TextJSX
           msg1="Metas na academia & saúde"
           />
           <div className="h-1 bg-gray-400"></div>
           </div>

           <div className="mt-4 p-2 ">
                <div className=" flex gap-2 flex-wrap ">
                <p className="h-48  w-40 bg-red-400 break-all text-center rounded">quero conquistar o mundo</p>
                <p className="h-48  w-40 bg-yellow-400 break-all text-center rounded">quero conquistar o mundo</p>
                <p className="h-48  w-40 bg-red-400 break-all text-center rounded">quero conquistar o mundo</p>
                <p className="h-48  w-40 bg-red-400 break-all text-center rounded">quero conquistar o mundo</p>
                <p className="h-48  w-40 bg-red-400 break-all text-center rounded">quero conquistar o mundo</p>
                </div>
           </div>
               </div>
        </div>

       
    )
}