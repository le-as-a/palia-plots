import styles from './page.module.css';

export default function Home() {
  const plots = [];
  function renderPlot(i, image = "") {
    return (
      <>
        <div className={styles.plot} key={`plot${i+1}`}>
          {image ? image : ""}
        </div>
      </>
    )
  }
  for (let i = 0; i < 9; i++) {
    plots.push(renderPlot(i));
  }

  const cropInfo = {
    "Carrot": {
      ability: "weed prevention",
      image: "🥕"
    },
    "Tomato": {
      ability: "water retain",
      image: "🍅"
    },
    "Wheat": {
      ability: "harvest boost",
      image: "🌾"
    },
    "Cotton": {
      ability: "quality boost",
      image: "☁️"
    }
  }

  const crops = []
  for (let key in cropInfo) {
    let info = cropInfo[`${key}`];
    crops.push((
      <>
        <div className={styles.crop}>
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
