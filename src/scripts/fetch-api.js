//get the user's basic account info for later reference
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
      window.sessionStorage.setItem("name", object.display_name);
    });
};
//this pulls the artists from the spotify API
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
  return fetch("http://localhost:8088/Spotify", {
    method: "POST",
    body: JSON.stringify(list),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

const getJSONList = () => {
  return fetch("http://localhost:8088/Spotify").then(function(response) {
    return response.json();
  });
};

//use getJSONLIST then this function to get data

const findEachUserList = (arrayObject, userName) => {
  let object = arrayObject.find(obj => {
    return obj.user.includes(userName);
  });
  return object;
};

const bothArray2 = (arr1, arr2) => {
  let newone = arr1.filter(obj => {
    return arr2.includes(obj);
  });
  return newone;
};

const getSpotifyArtists = uri => {
  return fetch(`https://api.spotify.com/v1/artists?ids=${uri}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${_token}`,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};

const please = artists => {
  fetch(
    `https://api.spotify.com/v1/recommendations?limit=20&market=US&seed_artists=${artists}&min_liveness=0.8`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${_token}`,
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => response.json())
    .then(data1 => {
      const uriArray = data1.tracks;
      const uri = uriArray.map(elem => {
        return elem.uri;
      });
      return uri.join();
    })
    .then(uris => {
      let playlistID = window.sessionStorage.getItem("playlist");
      fetch(
        `https://api.spotify.com/v1/playlists/${playlistID}/tracks?uris=${uris}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${_token}`,
            "Content-Type": "application/json"
          },
          method: "POST"
        }
      );
    });
};

const getShared = (user1, user2) => {
  getJSONList()
    .then(arrayObject => {
      let compareObjects = arrayObject
        .filter(object => {
          return object.uri === user1 || object.user === user2;
        })
        .map(twoObjects => (twoItems = twoObjects.items));
      return compareObjects;
    })
    .then(arrayoftwo => {
      let newone = arrayoftwo.map(array => {
        let thisone = array.map(obj => {
          let newobj = obj.id;
          return newobj;
        });
        return thisone;
      });
      return [newone[0], newone[1]];
    })
    .then(data => {
      let arr1 = data[0];
      let arr2 = data[1];
      let combo = bothArray2(arr1, arr2);
      let combo5 = combo.slice(0, 5);
      window.sessionStorage.setItem("artist", `${combo5.join(",")}`);
      return combo.join(",");
    })
    .then(getSpotifyArtists)
    .then(data => {
      createSharedDOM(data);
    });
};

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

const createNewPlaylist = (user, playlistName) => {
  fetch(`https://api.spotify.com/v1/users/${user}/playlists`, {
    body: JSON.stringify({
      name: `${playlistName}`,
      public: true
    }),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${_token}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => res.json())
    .then(data => {
      window.sessionStorage.setItem("playlist", data.id);
    })
    .then(news => {
      let play = window.sessionStorage.getItem("artist");
      please(play);
    })
    .then(now => {
      setTimeout(function() {
        let user1 = window.sessionStorage.getItem("uri");
        let playlistID = window.sessionStorage.getItem("playlist");
        let loadPlaylist = `<iframe src="https://open.spotify.com/embed/user/${user1}/playlist/${playlistID}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        playlistButton.insertAdjacentHTML("afterend", loadPlaylist);
      }, 300);
    });
};
