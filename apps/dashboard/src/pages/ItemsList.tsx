import { useEffect, useState, useRef, useCallback } from "react";
import NavigationButton from '../components/button'
import ItemCard from "../components/card";
import './../styles/list.css'

const ItemsList = ({  
  favorites, 
  setFavorites, 
  list, 
  setList, 
  page, 
  setPage,  
  scrollPosition
   }: any) => {


  const observerRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);
 
  if (!setFavorites) {
    console.error("setFavorites is missing in ItemsList! Check where it is rendered.");
  }

  useEffect(() => {
    console.log("scrollPosition")
    window.scrollTo(0, +sessionStorage.getItem('scrollPosition'));
  }, [scrollPosition]);

  
  const getItemList = useCallback(() => {
    if (loadingRef.current) return;
    loadingRef.current = true;
  fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}`)
  .then((res) => res.json())
  .then((data) => {
    setList((prev) => [...prev, ...data.products]);
    setPage((prev) => prev + 1);
    loadingRef.current = false;
  })
  .catch(() => {
    loadingRef.current = false;
  });
}, [page, setList, setPage]);


useEffect(() => {
  if (list.length === 0) {
    getItemList();
  }
}, [list, getItemList]);


useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      getItemList();
    }
  }, { threshold: 1 });

  if (observerRef.current) {
    observer.observe(observerRef.current);
  }

  return () => observer.disconnect();
}, [getItemList]);

const toggleFavorite = (item: any) => {
  const updatedFavorites = (favorites || []).some((fav) => fav.id === item.id)
    ? (favorites || []).filter((fav) => fav.id !== item.id)
    : [...(favorites || []), item];

  setFavorites(updatedFavorites);
};


    return (
       <>
         <NavigationButton route="/" text="Go to Dashboard"/>
         <div className="list-wrapper">
            { list && list.map((items) =>(<ItemCard key={items.id} itemDetails={items} toggleFavorite={toggleFavorite} isFavorite={(favorites || []).some((fav: any) => fav.id === items.id)}  noButtons={false}/>))} 
         </div>
         <div ref={observerRef} style={{ height: "20px", background: "transparent" }} />
       </>

    );

}

export default ItemsList