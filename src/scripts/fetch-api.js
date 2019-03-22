//this pulls the artists from the spotify API
const getUserInfo = () => {
  return fetch("https://api.spotify.com/v1/me", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${_token}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(object => {
      window.sessionStorage.setItem("uri", object.id);
      window.sessionStorage.setItem("name", object.display);
    });
};

const getUserList = () => {
  return fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50",
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${_token}`,
        "Content-Type": "application/json"
      }
    }
  ).then(res => res.json());
};

const nameUserList = function(top50) {
  const userNameValue = document.querySelector("#userName").value;
  const userURI = window.sessionStorage.getItem("uri");
  const newProp = { user: userNameValue, uri: userURI };
  top50 = { ...top50, ...newProp };
  return top50;
};

const postUserList = function(list) {
  return fetch("https://calm-mesa-57338.herokuapp.com/Spotify", {
    method: "POST",
    body: JSON.stringify(list),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

const getJSONList = () => {
  return fetch("https://calm-mesa-57338.herokuapp.com/Spotify").then(function(response) {return response.json(); });
}; 

//use getJSONLIST then this function to get data

const findEachUserList = (arrayObject, userName) => {
  let object = arrayObject.find(obj => {
    return obj.user.includes(userName);
  });
  return object;
};

let user1 = "brian"
let user2 = "chris"

const getShared = () => {
   getJSONList().then(arrayObject => {
  let compareObjects = arrayObject.filter(object=> {
    return (object.user === user1 || object.user === user2)
  }); let artistArray1 = compareObjects[0].items;
      let artistArray2 = compareObjects[1].items;
     
     ; console.log(bothArray)
})}



const findEachURIList = (arrayObject, uriName) => {
  let object = arrayObject.find(obj => {
    return obj.uri.includes(uriName);
  });
  return object;
};

const findAllUsers = () =>
  getJSONList().then(arrayObject => {
    let userNames = arrayObject.map(obj => (newArray = obj.user));
    return userNames;
  });

const findAllURI = () =>
  getJSONList().then(arrayObject => {
    let userURI = arrayObject.map(obj => (newArray = obj.uri));
    return userURI;
  });

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
// }
