import React from "react";
import "./style.css"







export default function Main(){

    
    const [myMeme, updateMyMeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg "
        
    }) 
    const [allMemeImages, updateAllMemeImages] = React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then((response)=>{
                return response.json()
            }).then((data)=>{
                updateAllMemeImages(data.data.memes)
            })
    },[])
    
   
    function randomGenerator(){
        const randomNumber = Math.floor(Math.random()*100)
         const meme = allMemeImages[randomNumber].url
         updateMyMeme((prev)=>{
            return {
                ...prev,
                randomImage :meme
            }
         })
        } 
        function handleChange(event){
            const {name,value} = event.target
            updateMyMeme((prev)=>{
                return {
                    ...prev,
                    [name]: value
                }
            })
        }
    
    return(
    <main className="main">
        <div className="form">
           <input type="text" placeholder="top text" className="input" value={myMeme.topText} name = "topText" onChange={handleChange}></input>
           <input type="text" placeholder="bottom text" className="input" value={myMeme.bottomText} name = "bottomText" onChange={handleChange}></input>
        </div>
           <button onClick={randomGenerator} className="btn"> Get a new meme image  🖼</button>
           <div className="meme-div">
           <img src={myMeme.randomImage} className= "meme-image" name = "randomImage"></img>
           <h2 className="meme-text top">{myMeme.topText}</h2>
           <h2 className="meme-text bottom">{myMeme.bottomText}</h2>
           </div>
       
    </main>
       
    )
}

