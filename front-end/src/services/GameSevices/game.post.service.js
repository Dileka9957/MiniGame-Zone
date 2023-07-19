import { client, METHODS } from 'services/api/restClient';
import { POST_COMMENT, POST_GAME, POST_POINTS, POST_RATING } from 'services/url';
// import { POST_GAME } from 'services/url';
import { POST_CATEGORY, DELETE_CATEGORY, PUT_CATEGORY, PUT_GAME, DELETE_GAME } from 'services/url';

export const postGameService = async (name, description, image, categories, isRewardGame, gameUrl) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        name: name,
        description: description,
        imgUrl: image,
        categories: categories,
        isRewardGame: isRewardGame,
        gameUrl: gameUrl
    };
    return await client.API(METHODS.POST, POST_GAME, body, headerConfig);
};

export const postGameCategoryService = async (categoryName, description, icon) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        categoryName: categoryName,
        description: description,
        icon: icon
    };
    return await client.API(METHODS.POST, POST_CATEGORY, body, headerConfig);
};

export const postCommentService = async (userId, gameId, comment, picture, name) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        userId: userId,
        gameId: gameId,
        comment: comment,
        picture: picture,
        name: name,
        
    };
    return await client.API(METHODS.POST, POST_COMMENT + gameId, body, headerConfig);
};
export const postPointService = async (name,score, userId, gameId, picture) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        score:score,
        picture: picture,
        name: name,
        
    };
    return await client.API(METHODS.POST, `${POST_POINTS + userId}&gameid=${gameId}`, body, headerConfig);
};

export const postRatingService = async (newValue, userId, gameId) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        newValue: newValue,
    };
    return await client.API(METHODS.POST, `${POST_RATING + userId}&gameid=${gameId}`, body, headerConfig);
}

export const deleteGameCategoryService = async (_id) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        _id: _id
    };
    return await client.API(METHODS.DELETE, DELETE_CATEGORY, body, headerConfig);
};

export const updateGameCategoryService = async (_id, categoryName, description, icon) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        _id: _id,
        categoryName: categoryName,
        description: description,
        icon: icon
    };
    return await client.API(METHODS.PUT, PUT_CATEGORY, body, headerConfig);
};

export const updateGameService = async (_id, name, description, imgUrl, categories, isRewardGame, gameUrl) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        _id: _id,
        name: name,
        description: description,
        imgUrl: imgUrl,
        categories: categories,
        isRewardGame: isRewardGame,
        gameUrl: gameUrl
    };
    return await client.API(METHODS.PUT, PUT_GAME, body, headerConfig);
};

export const deleteGameService = async (_id) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        _id: _id
    };
    return await client.API(METHODS.DELETE, DELETE_GAME, body, headerConfig);
};
