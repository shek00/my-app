import React, {useState} from 'react'


export default function TextFrom(props) {
    const handleUpClick=() =>{
       
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case.", "success");
    }
    const handleLoClick=() =>{
      
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to Lower case.", "success");
   }
   const handleClearClick=() =>{
   
     let newText = '';
     setText(newText);
     props.showAlert("Cleared.", "success");
  }

  const handleRevClick=() =>{
    let rev="";
    for(var i= text.length-1 ; i>=0 ; i--){
      rev+=text[i];
    }
    let newText = rev;
    setText(newText);
    props.showAlert("Reversed the String.", "success");
  }
  

 const handleExtra=() =>{
   
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra space removed.", "success");
  
}

    const handleOnChange = (event)=>{
       
        setText(event.target.value);
   }

   /*const handleCopy=() =>{
   
    var text= document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied Text.", "success");
    
 }*/
    const [text, setText] = useState('');
   
   let  word=text.trim().split(" ").length;

   return (
    <>
<div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3" >

    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-info mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-info mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-info mx-2" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-info mx-2" onClick={handleRevClick}>Reverse</button>
    {/*<button className="btn btn-info mx-2" onClick={handleCopy}>Copy</button>*/}
    <button className="btn btn-info mx-2" onClick={handleExtra}>Remove Spaces</button>

</div>
<div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
  <h2>Your Text Summary</h2>
  <p>{text === "" ? 0 : word} words and {text.length} character</p>
  
  <p>{text === "" ? 0 : 0.008* word} Minutes to Read.</p>
  <h2>Preview</h2>  
  <p>{text.length>0 ? text : "Write something to analize."}</p>
</div>
</>
  )
}