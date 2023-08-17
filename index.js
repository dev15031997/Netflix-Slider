const centerDiv=document.getElementById("centerdiv")

// ?_limit=10 if you add it then you will get only 10 data
fetch('https://jsonplaceholder.typicode.com/photos?_limit=20').then((apidata)=>
{
    return apidata.json()
}).then((jsondata)=>
{
    jsondata.map((data)=>
    {
        key=data.id;        // to get random image
        let img=document.createElement('img')  
        img.src=`https://picsum.photos/200/350?random==${key}`

        centerDiv.appendChild(img)
    })
})
   