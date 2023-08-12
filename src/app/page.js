"use client";
import styles from './page.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlot, updatePlot } from './slices/plotSlice';

export default function Home() {
  const [current, setCurrent ] = useState("");
  const cropInfo = useSelector(state => state.crops);
  const plots = useSelector(state => state.plots);
  const dispatch = useDispatch();
  let total = 9;

  const onCropClick = crop => {
    setCurrent(crop);
  };

  const onPlotClick = (id) => {
    if (!current) return;
    if (typeof window === "object" && id) {
      const plot = document.getElementById(id);
      plot.innerHTML = `${cropInfo[current].image}`;
    }
  }
  // function renderPlot(i) {
  //   return (
  //     <>
  //       <div className={styles.plot} id={`plot${i+1}`} key={`plot${i+1}`} onClick={onPlotClick(`plot${i+1}`)}>
  //       </div>
  //     </>
  //   )
  // }

  // for (let i = 0; i < 9; i++) {
  //   plots.push(renderPlot(i));
  // }

  for (let i = 0; i < total; i++) {
    dispatch(createPlot(`plot${i+1}`));
  }

  const crops = []
  for (let key in cropInfo) {
    let info = cropInfo[`${key}`];
    crops.push((
      <>
        <div className={styles.crop} onClick={onCropClick(key)}>
          <div className={styles.crop_image}>
            {info.image}
          </div>
          <div className={styles.crop_info}>
            <b>{key}</b><br />
            {info.ability}
          </div>
        </div>
      </>
    ))
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.soil}>
          {plots}
        </div>
        <div className={styles.crops}>
          {crops}
        </div>
      </div>
    </>
  )
}