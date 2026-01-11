import { Header, Identity, Services } from "./components";

export default function App() {
  return (
    <div id="app-container" className="min-h-screen bg-gray-100">
      <Header />
      <Identity />
      <Services />
    </div>
  );
}
