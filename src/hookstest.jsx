function Home() {

    const [paragraph,setParagraph] = useState();

    const changeName = ()=> {
        setParagraph("namae sekunder")
    }

    const deleteName = ()=> {
        setParagraph(null)
    }

    return (
        <>
            <Navbar />
            <div className='pr-[5%] pl-[5%]'>
            <div className='mb-5'>
                <p>{paragraph ? paragraph : "nama original"}</p>
            </div>
            <button className='btn btn-primary' onClick={()=>changeName()}>
            change paragraph
            </button>
            <button className='btn btn-primary' onClick={()=>deleteName()}>
            delete paragraph
            </button>
            </div>
        </>
    )
}