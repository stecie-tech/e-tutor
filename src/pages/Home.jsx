import { useEffect, useState } from "react";
import NavLayout from "../layouts/MainLayout";

export default function Home(){

    const [photos, setPhotos] = useState([])

    async function getPhotos(){
        const data = await fetch("https://jsonplaceholder.typicode.com/photos")
        return await data.json()
    }

    useEffect(() => {
        async function load(){
            setPhotos(await getPhotos())
        }
        load()
    }, [photos])

    return <NavLayout>
        <div>
            <h1>Hello from home</h1>
            <div>
                {photos.map((item, index) => <div key={index}>
                    <img src={item.url}/>
                </div>)}
            </div>
        </div>
    </NavLayout>
}
