import Card from "./Card";
import data from "./data";
import CardGridLayout from "./CardGridLayout";

function App() {
  return (
    <>
      <CardGridLayout Component={Card}></CardGridLayout>
    </>
  );
}

export default App;
