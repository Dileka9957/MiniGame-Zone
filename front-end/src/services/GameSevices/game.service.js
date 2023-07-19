import { client, METHODS } from 'services/api/restClient';
import { GET_GAMES, GET_CATEGORIES, GET_GAMES_BY_SEARCH, GET_GAMES_BY_CATEGORY, GET_GAMEDATA, GET_ADMINGAMES, GET_LATESTGAMES, GET_COMMENTS, GET_RATING, GET_POINTS } from 'services/url';

export const getGameServices = async (skip) => {   
    return await client.API(METHODS.GET, GET_GAMES + skip , {}, '');   
};

export const getLatestGamesServices = async (limit) => { 
    let body={
        limit:limit
    } 
    console.log('bbb',body)
    return await client.API(METHODS.GET, GET_LATESTGAMES , body, {}, '');   
};

export const getGamesForAdminServices = async () => {   
    return await client.API(METHODS.GET, GET_ADMINGAMES  , {}, '');   
};

export const getCategoryServices = async () => {
    return await client.API(METHODS.GET, GET_CATEGORIES, {}, '');
};

export const getGamesBySearchService = async (searchQuery,skip) => {
    return await client.API(METHODS.GET, `game/search?searchQuery=${searchQuery}&skip=${skip}`, {}, '');  
};

export const getGamesByCategoryService = async (category , skip) => {
    return await client.API(METHODS.GET, `game/categories?category=${category}&skip=${skip}`, {}, '');  
};

export const getGameDataService = async (gameId) => {
    return await client.API(METHODS.GET, GET_GAMEDATA + gameId, {}, '');
};

export const getCommentService = async (gameId, skip) => {
    return await client.API(METHODS.GET, `game/getcomments?gameid=${gameId}&skip=${skip}`, {}, '');
};

export const getRatingService = async (gameId) => {
    return await client.API(METHODS.GET, GET_RATING + gameId, {}, '');
};

export const getPointsService = async (gameId) => {
    return await client.API(METHODS.GET, GET_POINTS + gameId, {}, '');
};



