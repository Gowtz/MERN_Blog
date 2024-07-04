
export default function Post({title,desc,authorName,createdAt}:any) {
  return (
    <>
    <div className="card w-8/12 mx-auto bg-slate-200 py-10 px-20 my-5 rounded" >
        <h1 className="text-5xl">{title}</h1>
        <p>{desc}</p>
        <div className=""><span>{authorName}</span> <span>CreatedAt {createdAt} </span></div>
    </div>
    </>

  )
}
