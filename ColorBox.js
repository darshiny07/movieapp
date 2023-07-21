import { useState } from 'react';
import Button from '@mui/material/Button';
import './clrbox.css'

export function ColorBox() {

  const [color, setColor] = useState("");

  const [colorList, setColorList] = useState([]);
  
 

  let styles = {
    background: color,
    fontSize: "20px",
    // marginLeft: "50px",
    height: "50px",
    width: "200px",
  };


  return (
    <div className='colorbox' >

      <h1 >ColorBox</h1>
      <p>write any color name here!</p>

      <input placeholder="Enter a color " style={styles} onChange={(event) => setColor(event.target.value)} />

      {/* <button onClick={()=>  setColorList([...colorList,color]) } >Add color</button> */}
      <Button variant="contained" className='addclrbtn' onClick={() => setColorList([...colorList, color])} >Add Color</Button>

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
