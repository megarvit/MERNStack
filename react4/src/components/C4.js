
function C4()
{
    const names = ["Raj","Rahul","Shankar","Mahesh","Suresh"];

    const ListName = () => {
        return names.map((val,ind)=>{
            return <li key={ind}>{val}</li>
        })
    }

    return(
        <div>
            <ol>
                {ListName()}
            </ol>
        </div>
    )
}

export default C4;