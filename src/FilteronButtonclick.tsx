import { useEffect, useState } from "react";

const FilteronButtonclick = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("Error")
            } finally {
                console.log("data loaded");
            }
        }
        getData();
    }, [])

    const filterData=()=>{
        const result = data.filter(data=>data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        setData(result);
    }
    return (
        <div>
            <p>Filter data on button click</p>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={filterData}>Search</button>
            {
                data.map((item)=>(
                    <ul key={item.id}>
                        <li>{item.name}</li>
                    </ul>
                ))
            }

        </div>
    );
};

export default FilteronButtonclick;
