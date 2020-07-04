
let BASEURL = 'http://192.168.15.8:3005/client';


 let headers={
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'token':'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmVnaW5hbGRvIiwiaWRfdXNlciI6MSwicHJvZmlsZSI6IjEsMiIsImlhdCI6MTU5MjU2NjU1OH0.BcsJTGrdvBJSi2gYMvVG-IbsS1uSHRyll9kXDJ1ZCytIdFl-c92yRHC3HiPf_e3sH1WhcQsd02_j4E1LmwNrKQ'
 }

export const post =(endPoint,body) =>{
return new Promise((resolver,reject)=>{
    fetch(BASEURL+endPoint, {
        method: 'POST',
        headers:headers,
        body: JSON.stringify(body)
      }).then((data)=>resolver({status:data.status,data:data.json()}))

})

  
}


export const get =(endPoint) =>{
    return new Promise((resolver,reject)=>{
        fetch(BASEURL+endPoint, {
            headers:headers
          }).then((data)=> resolver({status:data.status,data:data.json()} ))
          .catch((e)=>console.log(e))
          } )
 
    }


export const del = (endpoint,body)=>{

    return new Promise((resolver,reject)=>{
        fetch(BASEURL+endpoint,{
          method: 'DELETE',
          headers:headers,
          body: JSON.stringify(body)
        }).then((data)=>resolver({status:data.status,data:data.json()}))
    })
}
export const put = (endPoint,body)=>{
  return new Promise((resolver,reject)=>{
    fetch(BASEURL+endPoint,{
      method:'PUT',
      headers:headers,
      body:JSON.stringify(body)
    }).then((data)=>resolver({status:data.status,data:data.json()})).catch((e)=>{console.log(e)})
  }) 
}