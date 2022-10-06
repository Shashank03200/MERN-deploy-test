import "./App.css";

import DataForm from "./components/DataForm/DataForm";
import DataList from "./components/DataList/DataList";

import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <DataForm />
        <DataList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
