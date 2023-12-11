import { useEffect , useState } from "react";
import axios from "axios"


const Slidebar = ({currentUsername}) =>{

	console.log(currentUsername);
	const[userpindata , setUserpindata] = useState();
	useEffect(()=>{
		const pindata = async() =>{
			const res = await axios.get(`/pins/${currentUsername}`);





			console.log(typeof(res));
			const data = await res.data;
			console.log(typeof(res.data));
			console.log(data);
			setUserpindata(data);

		}

		pindata();


	} , []);







	return (
		<div >
				<ul>
					{
						userpindata.map((item )=>(

							<li key = {item._id}>
								{item.title}
								</li>

						))

					}
					</ul>
		</div>

	);
}

export default Slidebar;