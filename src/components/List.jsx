import {useState, useEffect} from 'react'

const url = 'https://course-api.com/react-tours-project'

const GetData = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [tours, setTours] = useState('default tours')
    const [noah, setNoah] = useState('default Noah')

    useEffect(() =>{
        fetch(url)
        .then((response)=>{
            console.log(response)
            if(response.status >= 200 && response.status <= 299){
                return response.json()
            }else{
                console.log(response.status)
                setIsLoading(false)
                setIsError(true)
                throw new Error(response.statusText)
            }
        }).then((data)=>{
            console.log(data)
            // const {newTours} = data
            // console.log(newTours)
            setTours(data)
            setNoah(data)
            setIsLoading(false)
        }).catch((error)=>{console.log(error)})
        
    },[])
    if(isLoading){
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }
    if(isError){
        return (
            <div>
                <h1>Error....</h1>
            </div>
        )
    }
    console.log(tours)
    const removeTour = (id)=>{
        let tour3 = tours.filter((tour)=> tour.id !== id)
        setTours(tour3)
    }
    // const tours2 = tours;
    return (
        <>
        {tours.map(tour =>{
            const {id, name, info, image, price} = tour
            return(
                <article key={id} className="list" style={{width: '80%', display: 'flex'}}>
                    
                    <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: '20rem'}}>
                        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'}}>
                            <h4>{name}</h4>
                            <h6>{price}</h6>
                            <p>{info}</p>
                            <button onClick={() =>{
                                removeTour(id)
                            }}
                            style={{width:"6.5rem"}}>Not Interested</button>
                        </div>
                        
                        <img src={image} alt={name} style={{height: '100%', width: 'auto'}}/>
                    </div>
                </article>
            )
        })}
        <div className="buttons">
          <button onClick={()=> setTours([])}>Clear</button>
          <button onClick={()=> setTours(noah)}>Reset</button>
        </div></>
    )
}

export default GetData