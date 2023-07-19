
import { getRewardGameService, postCommentService, postGameService, postPointService, postRatingService } from 'services/GameSevices/game.post.service';
// import { postGameService } from 'services/gameView/game.services';
import {
    postGameCategoryService,
    deleteGameCategoryService,
    updateGameCategoryService,
    updateGameService,
    deleteGameService
} from 'services/GameSevices/game.post.service';

export const postGameAction = (name, description, imgUrl, categories, isRewardGame, gameUrl) => {
    // console.log('post game action: ', name, description, image, categories);

    return postGameService(name, description, imgUrl, categories, isRewardGame, gameUrl)
        .then((responce) => {
            if (responce.status === 201) {
                window.location.reload();
            }
            // console.log('responce', responce);
        })
        .catch((error) => {
            console.log('error post Upload', error);
        });
};


export const postGameCategoryAction = (categoryName, description, icon) => {
    // console.log('postGameCategoryAction ', categoryName, description);
    return postGameCategoryService(categoryName, description, icon)
        .then((responce) => {
            if (responce.status === 201) {
                window.location.reload();
            }
            console.log('responce', responce);
        })
        .catch((error) => {
            console.log('error post Upload', error);
        });
};

export const postRatingAction = (newValue, userId, gameId) => {
    // console.log('newValue', newValue);

    return postRatingService(newValue, userId, gameId)
        .then((responce) => {
             console.log('responce saveRatingAction: ', responce)
            if (responce.status === 200) {
                return
            } else {
                 console.log('err res', responce.response.data);          
            }
        })
        .catch((error) => {
            console.log('error saveRatingAction', error);
        })
}


export const postPointsAction = (name,score, userId, gameId, picture) => {
    // console.log('newValue', newValue);

    return postPointService(name,score, userId, gameId, picture)
        .then((responce) => {
             console.log('responce saveRatingAction: ', responce)
            if (responce.status === 200) {
                return
            } else {
                 console.log('err res', responce.response.data);          
            }
        })
        .catch((error) => {
            console.log('error saveRatingAction', error);
        })
}

export const postCommentAction = (userId, gameId, comment, picture, name ) => {
    postCommentService(userId, gameId, comment, picture, name )
        .then((responce) => {
            console.log('responce', responce);
            
             if (responce.status === 201) {
                //  window.location.reload();
               
             }
        })
        .catch((error) => {
            console.log('error post comment', error);
        });
};

export const deleteGameCategoryAction = (_id) => {
    // console.log('deleteGameCategoryAction  ', _id);
    return deleteGameCategoryService(_id)
        .then((responce) => {
            if (responce.status === 201) {
                window.location.reload();
            }
            console.log('responce ', responce);
        })
        .catch((error) => {
            console.log('error post Upload', error);
        });
};

export const UpdateGameCategoryAction = (_id, categoryName, description, icon) => {
    // console.log('UpdateGameCategoryAction ', categoryName, description);
    return updateGameCategoryService(_id, categoryName, description, icon)
        .then((responce) => {
            if (responce.status === 201) {
                window.location.reload();
            }
            console.log('responce', responce);
        })
        .catch((error) => {
            console.log('error post Upload', error);
        });
};

export const UpdateGameAction = (_id, name, description, imgUrl, categories, isRewardGame, gameUrl) => {
    // console.log('UpdateGameCategoryAction ', categoryName, description);
    return updateGameService(_id, name, description, imgUrl, categories, isRewardGame, gameUrl)
        .then((responce) => {
            if (responce.status === 201) {
                window.location.reload();
            }
            console.log('responce', responce);
        })
        .catch((error) => {
            console.log('error post Upload', error);
        });
};

export const deleteGameAction = (_id) => {
    // console.log('deleteGameAction  ', _id);
    return deleteGameService(_id)
        .then((responce) => {
            if (responce.status === 201) {
                window.location.reload();
            }
            console.log('responce ', responce);
        })
        .catch((error) => {
            console.log('error post Upload', error);
        });
};
