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
                setError(true)
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
    
    const filteredData = data.filter(emp=>emp.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div className="p-10">
            <p><strong>Filter Data by Name</strong></p>

            <input
                className="placeholder:text-gray-500 border-2 placeholder:italic ..."
                placeholder="Search by name"
                type="text"
                name="search"
                onChange={(e)=>setSearch(e.target.value)}
            />

            <table className="w-full border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-4 py-2 text-left">ID</th>
                        <th className="border px-4 py-2 text-left">Name</th>
                        <th className="border px-4 py-2 text-left">Email</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{item.id}</td>
                            <td className="border px-2 py-2">{item.name}</td>
                            <td className="border px-2 py-2">{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
export default Filter;