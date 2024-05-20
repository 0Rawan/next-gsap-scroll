import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';

import Flip from 'gsap/dist/Flip';// Importing only Flip from GSAP


function Grid() {
gsap.registerPlugin(Flip);
const [tiles, setTiles] = useState([]);
const [active, setActive] = useState(null);
const gridRef = useRef(null);
const gridElementsRef = useRef([]);

useEffect(() => {
  const tempTiles = Array.from(gridRef.current.querySelectorAll('.grid-tile'))
  setTiles(tempTiles);
  setActive(tempTiles[7]);
}, []);




useLayoutEffect(() => {
  const state = Flip.getState(gridElementsRef.current);
  if (active)
  active.dataset.grid = "featured"
  Flip.from(state, {
    duration: 0.85,
    absolute: true,
    ease: "power3.inOut"
  });
  
}, [tiles]);




const changeGrid = (e) => {
  const state = Flip.getState(gridElementsRef.current);

 let el = e.target.parentElement
  if (el.dataset.grid  === undefined)
     el = e.target
  
  console.log(e.target)
  console.log(el.dataset.grid)
  if (el === active) return;

  const activeIndex = tiles.findIndex((tile) => tile === active);
  const targetIndex = tiles.findIndex((tile) => tile === el);
  const newTiles = [...tiles]
  newTiles[activeIndex].dataset.grid = el.dataset.grid
   gsap.to(tiles[targetIndex].dataset, {
   grid: 'featured',
   duration: 0.85,
   absolute: true,
   ease: 'power3.inOut',
 });

 gsap.to(tiles[activeIndex].dataset, {
  grid: el.dataset.grid,
  duration: 0.85,
  absolute: true,
  ease: 'power3.inOut',
});

 Flip.from(state, {
  duration: 0.85,
  absolute: true,
  ease: "power3.inOut"
});


  setActive(el);
  setTiles(newTiles)

  
 };




const setRefs = (e, i) => {
  const { current } = gridElementsRef;
  current[i] = e;
};

  return (
    <div id="grid-layout" ref={gridRef} >
  <div className="grid">
    <div className="grid-tile tile-1 clickable-false" ref={el=> setRefs(el, 0)} onClick={(e) =>changeGrid(e)}  data-grid="tile-1">
    tile1
    </div>
    <div className="grid-tile tile-2 clickable-true" ref={el=> setRefs(el, 1)} onClick={(e) =>changeGrid(e)}  data-grid="tile-2">
    <img src='./img/kunfit.jpeg'/>
    <div className='overlay'></div>
      
    </div>
    <div className="grid-tile tile-3 clickable-true" ref={el=> setRefs(el, 2)} onClick={(e) =>changeGrid(e)}  data-grid="tile-3">
    <img src='./img/sarahah.png'/>
    <div className='overlay'>
      <a>code</a>
      <a>Live</a>
    </div>
    </div>
     
    <div className="grid-tile tile-4 clickable-true" ref={el=> setRefs(el, 3)} onClick={(e) =>changeGrid(e)}  data-grid="tile-4">
      <img src='./img/metrak.png'/>
    </div>
    <div className="grid-tile tile-5 clickable-true" ref={el=> setRefs(el, 4)} onClick={(e) =>changeGrid(e)}  data-grid="tile-5">
      <h2>Tile 5</h2>
    </div>
    <div className="grid-tile tile-6 clickable-true" ref={el=> setRefs(el, 5)} onClick={(e) =>changeGrid(e)}  data-grid="tile-6">
      <h2>Tile 6</h2>
    </div>
    <div className="grid-tile tile-7 clickable-true" ref={el=> setRefs(el, 6)} onClick={(e) =>changeGrid(e)}  data-grid="tile-7">
      <h2>Tile 7</h2>
    </div>
    <div className="grid-tile tile-featured clickable-true" ref={el=> setRefs(el, 7)} onClick={(e) =>changeGrid(e)}  data-grid="featured">
      <h2>Featured</h2>
    </div>
    <div className="grid-tile tile-8 clickable-false" ref={el=> setRefs(el, 8)} onClick={(e) =>changeGrid(e)}  data-grid="tile-8">
      <h2>Tile 8</h2>
    </div>
  </div>
</div>
  )
}

export default Grid