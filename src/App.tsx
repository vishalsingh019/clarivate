import { lazy, Suspense, useEffect, useRef, useState} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const DemoApp = lazy(() => import("demoApp/App"));
import Header from './components/Header';
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";


const Dashboard = lazy(() => import('dashboard/Dashboard')) as React.ComponentType<any>;

// Type-cast the remote component
const ItemsList = lazy(() => import('dashboard/ItemsList')) as React.ComponentType<any>;


const AppWrapper = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/list" && contentWrapperRef.current) {
      contentWrapperRef.current.scrollTo({ top: +sessionStorage.getItem("scrollPosition"), behavior: "smooth" });
    }
  }, [location]);



  const contentWrapperRef = useRef<HTMLDivElement | null>(null);


    const handleScroll = () => {
      if (contentWrapperRef.current) {
        const scrollY = contentWrapperRef.current.scrollTop;
        if(scrollY >0){
        sessionStorage.setItem("scrollPosition", scrollY.toString());
        }
      }
    };
  

  return (


    <Suspense fallback={<div>Loading...</div>}>
    <Header/>
   
    <div className="main-wrapper">
      <SideMenu/>
      <div className="page-content-wrapper" ref={contentWrapperRef}
            onScroll={handleScroll}>
     
       <Routes>

          <Route path="/" element={<Dashboard favorites={favorites}/>} />
          <Route path="/list" element={<ItemsList favorites={favorites} 
                    setFavorites={setFavorites} 
                    list={list} 
                    setList={setList} 
                    page={page} 
                    setPage={setPage}
                     />} />
          <Route path="/demo-app" element={<DemoApp />} />
         
        </Routes>
       
      </div>
    </div>
   
    <Footer/>
    </Suspense>
  
 
   

  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
