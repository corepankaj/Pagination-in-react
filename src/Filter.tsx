import { useEffect, useState } from "react";

const Filter = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
   
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const result = await response.json();
                setData(result);
            } catch (error) {
                setData(true)
            } finally {
                setLoading(false)
            }
        }
        getData();
    }, [])

    if (loading) {
        return <p>Loading..</p>
    }
    if (error) {
        return <p>Getting Error..</p>
    }

    //const filteredData = data.filter(emp => emp.name.toLowerCase().includes(search.toLocaleLowerCase()))
    const filteredData = data.filter(emp=>emp.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
     
    return (
        <div>
            <b>Filter Data</b>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            
            {
                filteredData.map((item) => (
                    <ul key={item.id}>
                        <li>{item.name}</li>
                    </ul>
                ))
            }
        </div>
    )
}
export default Filter;