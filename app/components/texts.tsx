interface propsText {
    msg1: string,
    msg2?: string,
    msg3?: string
}
export default function TextJSX (props: propsText) {
    return (
        <div className="flex justify-between text-zinc-600 text-xs mb-4 mt-4">
        <p>{props.msg1}</p>
       {props.msg2 && <p>{props.msg2}</p>}
     
      </div>
    )
}