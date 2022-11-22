import { useFetch } from "./hooks/useFetch";

//* Custom Hooks?

function App() {
  const { data, error, loading } = useFetch(
    "https://63737d12348e9472990dd266.mockapi.io/shoes"
  );
  if (error) {
    console.log(error);
  }
  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = useFetch("https://63737d12348e9472990dd266.mockapi.io/Tasks");
  if (error2) {
    console.log(error2);
  }

  return (
    <>
      <h2>first fetch</h2>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          {data.map((item) => (
            <div>{item.brand}</div>
          ))}
        </div>
      )}
      <br></br>
      <br></br>
      <br></br>
      <h2>second fetch</h2>
      {loading2 && <div>Loading...</div>}
      {data2 && (
        <div>
          {data2.map((item) => (
            <div>{item.title}</div>
          ))}
        </div>
      )}
    </>
  );
}
export default App;
