async function getapidata() {
        try{
              const apidata=await fetch('https://jsonplaceholder.typicode.com/posts')
              const jsondata=await apidata.json()
              /*console.log(jsondata)*/
              jsondata.forEach(element => {
                console.log("userID:",element.userId)
                
              });
              console.log(jsondata[0].userId)

        }
        catch(err){
            console.log(err)

        }
}
getapidata()