import { useEffect, useState } from "react";

const Pagination = () => {
    const [data, setData] = useState([]);
    const [page, setPage]=useState(1);
    const limit=12;
    const totalPages = Math.ceil(data.length / limit);

    const getData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&&_limit=${limit}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log("Error");
        } finally {
            console.log("data loaded");
        }
    }
    useEffect(() => {
        getData();
    }, [page])
    return (
        <div className="p-6">
         
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Completed</th>
           
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-2 py-2">{item.title}</td>
              <td className="border px-2 py-2">
                <button style={{background:item.completed?"green":"gray",
                    width:"150px", height:"30px", borderRadius:"10px"
                }}
                >
                {item.completed?"Completed":"Pending"}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <button className="px-3 py-1 border rounded hover:bg-gray-200 bg-red-400"
        disabled={page ===1} onClick={()=>setPage(page-1)}
        >
         Back      
        </button>

        <button className="px-3 py-1 border rounded hover:bg-gray-200 bg-red-400"
         onClick={()=>setPage(page+1)} disabled={page === 0}
        >
         Next      
        </button>
       

    </div>
    )
}
export default Pagination;