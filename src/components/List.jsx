import {useState, useEffect} from 'react'

const url = 'https://course-api.com/react-tours-project'

const GetData = ({}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [tours, setTours] = useState('default tours')

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
    return(
        <div>
            tour
        </div>
    )
}

export default GetData