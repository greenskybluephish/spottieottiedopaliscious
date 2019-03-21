 //this pulls the artists from the spotify API
 const getUserList = () => {
   return fetch("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50", {
     headers: {
       Accept: "application/json",
       Authorization: `Bearer ${_token}`,
       "Content-Type": "application/json"
     }
   }).then(res => res.json())
 }


 const nameUserList = function (top50) {
   const userNameValue = document.querySelector("#userName").value;
   const newProp = {user: userNameValue};
   top50 = {...top50, ...newProp}      
   return top50;
 }


 const postUserList = function (list) {
   return fetch("https://calm-mesa-57338.herokuapp.com/Spotify", {
       method: "POST",
       body: JSON.stringify(list),
       headers: {
         "Content-Type": "application/json"
       }
     })
     .then(response => response.json())
 }

 const getJSONList = () => {
    return fetch("https://calm-mesa-57338.herokuapp.com/Spotify")
   .then(function (response) {
     return response.json()
   })};
//use getJSONLIST then this function to get data



const findEachUserList = (arrayObject) => {
  let userName = document.querySelector("#selectUser").value
let object = arrayObject.find(obj => {
  return obj.user.includes(userName);
  });
  return object.items
};

const findAllUsers = () => 
 getJSONList().then(arrayObject =>{
  let userNames = arrayObject.map(obj => newArray = obj.user)
    return userNames;})
 






// const eachObject = getJSONList().then(findEachUserList);




  




//create array of top 5 artists for creating playlist   
// const prom = []   
// const aProm = () => {
//  Promise.all([getDBA(), getDBA2()]).then(values => {
//    const shared = values[0].filter(e => values[1].indexOf(e) !== -1)
//    prom.push(shared.slice(0, 5).join())})
//    return prom;
//    }

// //needs to be split up, fetches recs, then pushes them to playlist  
//  const please = () => {
//    fetch(`https://api.spotify.com/v1/recommendations?limit=20&market=US&seed_artists=${prom}&min_valence=0.5`, {
//      headers: {
//        Accept: "application/json",
//        Authorization: `Bearer ${_token}`,
//        "Content-Type": "application/json"
//      }
//    }).then(response => response.json()).then(data1 => {
//      const uriArray = data1.tracks
//      const uri = uriArray.map(elem => {
//        return elem.uri
//      });
//      return uri.join();
//    }).then(uris => {
//      fetch(`https://api.spotify.com/v1/playlists/3strS5xAxQV0wwSX3MV6Mf/tracks?uris=${uris}`, {
//        headers: {
//          Accept: "application/json",
//          Authorization: `Bearer ${_token}`,
//          "Content-Type": "application/json"
//        },
//        method: "POST"
//      })

//    })
//  }

