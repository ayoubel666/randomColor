import {useState,useRef} from "react" ;
import Color from "color"
import "./index.css"

function ColorC(){

    const [Hex,setHex] = useState(true) ;
    const [Rgb,setRbg] = useState(false) ;
    const [color,setColor] = useState("#FFF")

    const container = useRef()

    const handleHEX = () => {
        setHex(true)
        setRbg(false)
        setColor((prev) => Color(prev).hex().toString())
    }

    const handleRGB = () => {
        setHex(false);
        setRbg(true);
        setColor((prev) => Color(prev).rgb().toString())
    }
    const handleRandom = () => {
        const r = Math.floor(Math.random()*256) ;
        const g = Math.floor(Math.random()*256) ;
        const b = Math.floor(Math.random()*256) ;
        setColor(`rgb(${r},${g},${b})`);
        if(Hex){
            setColor(((prev) => Color(prev).hex().toString())) ;
        }
    }

    return(
        <div style={{backgroundColor:color}} ref={container} className="ctc">
            <div>
                <div>
                    <button onClick={handleHEX}>Create HEX Color</button>
                    <button onClick={handleRGB}>Create RGB Color</button>
                    <button onClick={handleRandom}>Generate Random Color</button>
                </div>
                <p>{Hex && "HEX" || Rgb && "RGB"} COLOR</p>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default ColorC ;