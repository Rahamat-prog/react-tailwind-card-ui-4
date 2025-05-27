import "./App.css";
import Card from "./card";

function App() {
  return (
    <div className="p-6">
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-center text-2xl font-bold mb-6">
        Tailwind Test
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        <Card username="Rahamat" btn="Click me" />
        <Card username="Hitesh" />
        <Card username="Ankit" />
        <Card username="Sana" />
      </div>
    </div>
  );
}

export default App;
