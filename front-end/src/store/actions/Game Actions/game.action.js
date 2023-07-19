
import {
    getCategoryServices,
    getGamesBySearchService,
    getGameServices,
    getGamesByCategoryService,
    getGameDataService,
    getGamesForAdminServices,
    getLatestGamesServices,
    getCommentService,
    getRatingService,
    getPointsService
} from 'services/GameSevices/game.service';
import { store } from 'store';
import { START_LOADING, END_LOADING } from '../actions.types';


export const getLatestGames = (limit) => {
    store.dispatch({ type: START_LOADING });
    
    return getLatestGamesServices(limit)
        .then((responce) => {
            
            if (responce.status === 200) {
                return responce.data;
                
            } else {
                console.log('err res', responce);
            }
            store.dispatch({ type: END_LOADING });
        })
        .catch((error) => {
            console.log('error getLatestGameAction', error);
            store.dispatch({ type: END_LOADING });
        });
};

export const getGamesForAdmin = () => {
    store.dispatch({ type: START_LOADING });
    
    return getGamesForAdminServices()
        .then((responce) => {
            
            if (responce.status === 200) {
                return responce.data;
                
            } else {
                console.log('err res', responce);
            }
            store.dispatch({ type: END_LOADING });
        })
        .catch((error) => {
            console.log('error getGameAction', error);
            store.dispatch({ type: END_LOADING });
        });
};

export const getAllGames = (skip) => {
    store.dispatch({ type: START_LOADING });
    
    return getGameServices(skip)
        .then((responce) => {
            
            if (responce.status === 200) {
                return responce.data;
                
            } else {
                console.log('err res', responce);
            }
            store.dispatch({ type: END_LOADING });
        })
        .catch((error) => {
            console.log('error getGameAction', error);
            store.dispatch({ type: END_LOADING });
        });
};

export const getAllcategories = () => {
    return getCategoryServices()
        .then((responce) => {
            //console.log('getAllCategories response ', responce);

            if (responce.status === 200) {
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getCategoryAction', error);
        });
};

export const getGamesBySearch = (searchQuery,skip) => {
    
    return getGamesBySearchService(searchQuery,skip)
        .then((responce) => {
            //console.log('getGamesBySearch responce ', responce);

            if (responce.status === 200) {
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getGamesBySearch', error);
        });
};

export const getGamesByCategory = (category , skip) => {
    //console.log('getGamesByCategory 👍', category);
    return getGamesByCategoryService(category ,skip)
        .then((responce) => {
            //console.log('responce getGamesByCategory', responce);

            if (responce.status === 200) {
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getGamesBySearch', error);
        });
};

export const getGameDataAction = (gameId) => {
    store.dispatch({ type: START_LOADING });
    return getGameDataService(gameId)
        .then((responce) => {
            //console.log('getGameDataAction responce 👍 ', responce);

            if (responce.status === 200) {
                store.dispatch({ type: END_LOADING });
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getGameDataAction', error);
            store.dispatch({ type: END_LOADING });
        });
};

export const getRatingAction = (gameId ) => {
    //console.log('getRating 👍', category);
    return getRatingService(gameId)
        .then((responce) => {
            //console.log('responce getRating', responce);

            if (responce.status === 200) {
                return responce.data;
            }
            //  else {
            //     console.log('err res', responce);
            // }
        })
        .catch((error) => {
            console.log('error getRating', error);
        });
};


export const getCommentAction = (gameId,skip) => {
    store.dispatch({ type: START_LOADING });
    
    return getCommentService(gameId,skip).then((responce) => {
            //console.log('getCommentAction responce 👍 ', responce);

            if (responce.status === 200) {
                store.dispatch({ type: END_LOADING });
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getCommentAction', error);
            store.dispatch({ type: END_LOADING });
        });
};


export const getPointsAction = (gameId) => {
    store.dispatch({ type: START_LOADING });
    
    return getPointsService(gameId).then((responce) => {
            console.log('getPointstAction responce 👍 ', responce);

            if (responce.status === 200) {
                store.dispatch({ type: END_LOADING });
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getPointsAction', error);
            store.dispatch({ type: END_LOADING });
        });
};