// user input = date. Date = fetch NASA picture of the day from date

document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const date= document.querySelector('input').value
  console.log(date)
  const url = "https://api.nasa.gov/planetary/apod?api_key=x89IH0I5HwsuZg0nYfHGPdRtiAFq5xcz4m9AvfbX&date="+(date)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('description').innerText = data.explanation
        document.getElementById('title').innerText=data.title
        if ( data.media_type ==='image'){
        //go to document, select image, image src is in the NASA hdrul in
          document.querySelector('img').src = data.hdurl
          document.querySelector('img').classList.add("img");
          document.querySelector('img').classList.remove("noDisplay");
          document.getElementById('videowrap').classList.add("noDisplay");
          document.querySelector('iframe').classList.add("noDisplay");
        }else if(data.media_type === "video"){
          document.querySelector('iframe').src=data.url;    
          document.querySelector('iframe').classList.add("video");
          document.getElementById('videowrap').classList.remove("noDisplay");
          document.querySelector('iframe').classList.remove("noDisplay")
          document.querySelector('img').classList.add("noDisplay");
        }   
      })
        .catch (error => {
            console.log(`error ${error}`)
        })
}


