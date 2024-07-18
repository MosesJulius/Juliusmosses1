import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";



const ScheduleInfos = ()=>{

    const [schedule, setschedule] = useState([]);
    useEffect(() => {
        loadSchedule();
 }, []);

 const {id} = useParams();
 const loadSchedule = async () => {
    const result = await axios.get("http://localhost:8080/schedule/getting");
    setschedule(result.data);
 };

 const deleteSchedule = async (id) => {
    await axios.delete('http://localhost:8080/schedule/delete?id=${id}');
    loadSchedule();
 };

    return(
    
    <div>

<div className="content" id="content">
    <table className="table border shadow">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Officer Name</th>
                <th scope="col">Date</th>
                <th scope="col">Shift</th>
                <th scope="col">Post</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {schedule.map((schedule, index) =>(
                <tr key={schedule.id}>
                    <th scope="row">
                        {index + 1}
                    </th>
                    <td>{schedule.officerName}</td>
                    <td>{schedule.date}</td>
                    <td>{schedule.shift}</td>
                    <td>{schedule.post}</td>
                    <td>
                        <Link to={`ScheduleUpdate/${schedule.id}`}>
                            Edit
                        </Link>
                        <button
                            onClick={() => deleteSchedule(schedule.id)}
                            >
                                Delete
                        </button>
                    </td>
                </tr>
            ) )}
        </tbody>
    </table> 
</div>

    </div>
        
    
    );
    
}

export default ScheduleInfos;