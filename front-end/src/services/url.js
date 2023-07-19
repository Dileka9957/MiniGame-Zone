export const BASE_URL = 'http://localhost:5000/';
//export const BASE_URL = 'https://mini-game-zone-be.herokuapp.com/';
//export const BASE_URL = 'https://mini-game-zone-backend.onrender.com/';
//export const BASE_URL = 'https://long-lime-puppy-hem.cyclic.app/';
// export const BASE_URL = 'https://mini-game-zone-backend-production.up.railway.app/';
// export const BASE_URL = 'http://service-node-app.minigameszone.com/';


export const USER_LOGIN = 'user/signin';
export const GET_GAMES = 'game/all?skip=';
export const GET_CATEGORIES = 'game/allCategory';
// export const GET_GAMES_BY_SEARCH = `game/search?searchQuery=${searchQuery}&skip=${skip}`;
// export const GET_GAMES_BY_CATEGORY = `game/categories?category=${category}&skip=${skip}`;
export const GET_GAMEDATA = 'game?gameid=';
export const POST_COMMENT = 'game/comment?userid=';
export const POST_POINTS = 'game/postPoints?userid=';
export const GET_ADMINGAMES = 'game/adminGames';
export const GET_LATESTGAMES = 'game/latestGames';
//export const GET_COMMENTS = 'game/getcomments?gameid=';
export const GET_RATING = 'game/rating?gameid=';
export const GET_POINTS = 'game/points?gameid=';

export const POST_GAME = 'game/'; 
export const POST_RATING = 'game/rate?userid=';
export const POST_CATEGORY = 'game/category';
export const DELETE_CATEGORY = 'game/deleteCategory';
export const PUT_CATEGORY = 'game/updateCategory';
export const PUT_GAME = 'game/updateGame';
export const DELETE_GAME = 'game/deleteGame';

 
export const GET_USERS = 'user/all';
export const POST_USERS ='user/add';
export const DELETE_USERS ='user/deleteuser';
export const PUT_USERS ='user/updateuser';

export const GET_CONTACTUS = 'user/getmessage'
export const POST_CONTACTUS = 'user/postmessage'; 
export const DELETE_CONTACTUS = 'user/deletemessage'; 