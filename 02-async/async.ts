import axios from "axios";
// create http request to fetch data from the JSON PLACEHOLDER API using axios

const fetchData = (id: number): Promise<any> => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.data)
    // .catch(err => console.error(err));  
}
console.log(fetchData(1));


//******************************************************************/

// rewrite the function using async/await & try/catch

// const fetchData = async (id: number): Promise<any> => {
//     try {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     console.log(response.data);
//   }
//   catch (err) {
//       console.log(err);
//     }
//   }

// fetchData(1);
  
  
  export default fetchData;

  //* $ npx ts-node 02-async/async.ts