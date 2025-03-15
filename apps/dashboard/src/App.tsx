
import './App.css'
import { Route ,Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import ItemsList from './pages/ItemsList';
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0); 
  console.log("App state:", { favorites, setFavorites });
  return (
    <>
         
            <Routes>
                <Route path="/" element={<Dashboard  favorites={favorites}/>} />
                <Route path="/list" element={<ItemsList favorites={favorites} 
            setFavorites={setFavorites} 
            list={list} 
            setList={setList} 
            page={page} 
            setPage={setPage} />} />
              </Routes>
             
         
    </>
  )
}

export default App
