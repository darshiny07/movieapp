import { useState } from 'react';
import Button from '@mui/material/Button';

export function ColorBox() {

  const [color, setColor] = useState("green");

  const [colorList, setColorList] = useState(["pink", "orange"]);

  let styles = {
    background: color,
    fontSize: "20px",
    height: "50px",
    width: "200px",
  };


  return (
    <div>

      <h1>ColorBox</h1>

      <input placeholder="Enter a color " style={styles} onChange={(event) => setColor(event.target.value)} />

      {/* <button onClick={()=>  setColorList([...colorList,color]) } >Add color</button> */}
      <Button variant="contained" onClick={() => setColorList([...colorList, color])}



      >Add Color</Button>

      {colorList.map((item) => (
        <Addcolor clr={item} />
      ))}
    </div>
  );
}
function Addcolor({ clr }) {
  const styles = {
    background: clr,
    height: "50px",
    width: "100px",
    marginTop: "20px"
  };

  return (
    <div style={styles} className="list">


    </div>
  );
}
