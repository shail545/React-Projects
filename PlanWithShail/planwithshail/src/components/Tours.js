function Tours({tours}){
return(
    <div>
        <div>Plan With Shail</div>
        <div> 
            {
                tours.map((tour)=>{
                    return <Card{...tour}></Card>
                })
            }
        </div>
    </div>
)
}

export default Tours;