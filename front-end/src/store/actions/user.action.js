import { getUserService ,postUserService , deleteUserService ,updateUserService, contactUsService, getContactUsServices, deleteContactUsService} from "services/user.services";




export const getUserAction = () =>{
    //console.log('checked')
    return getUserService().then ((responce)=> {
        //console.log('checked',responce) 
        if (responce.status === 200){
            return responce.data;    
        } else {
           console.log('err res',responce);
        }
    })
    .catch((error) => {
        console.log('error getGameAction', error);
    })
}

export const postUserAction = (name,email,points) =>{
    
    return postUserService(name,email,points)
    .then ((responce)=> {
        console.log('checked',responce) 
        if (responce.status === 200){
            window.location.reload();   
        } else {
           console.log('err res',responce);
        }
    })
    .catch((error) => {
        console.log('error getGameAction', error);
    })
}


export const deleteUserAction = (_id) => {
    return deleteUserService(_id)
        .then((responce) => {
            console.log('responce postCategoryAction 🥇 ', responce);

            if (responce.status === 200) {               
                window.location.reload()              
            } else {
                console.log('err resp', responce);
            }
        })
        .catch((error) => {
            console.log('error getGameAction', error);
        });
};

export const updateUserAction = (_id, name, country, aboutMe , address , contactPhone) => {
    //console.log('checked')
    return updateUserService(_id, name , country, aboutMe , address , contactPhone)
        .then((responce) => {
            console.log('responce postUserAction 🥇 ', responce);

            if (responce.status === 200) {               
                 window.location.reload()              
            } else {
                console.log('err resp', responce);
            }
        })
        .catch((error) => {
            console.log('error postUserAction', error);
        });
};

export const contactUsAction = (userId, firstName, lastName, email, message) => {
    // console.log('checked')
    return contactUsService(userId, firstName, lastName, email, message)
        .then((responce) => {
            console.log('responce contactUsAction 🥇 ', responce);

            if (responce.status === 200) {               
                 window.location.reload()              
            } else {
                console.log('err resp', responce);
            }
        })
        .catch((error) => {
            console.log('error contactUsAction', error);
        });
};



export const getContactUsRecords = () => {
    return getContactUsServices()
        .then((responce) => {
            //console.log('getAllCategories response ', responce);

            if (responce.status === 200) {
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getContactUsAction', error);
        });
};


export const deleteContactUsAction = (_id) => {
    // console.log('deleteGameCategoryAction  ', _id);
    return deleteContactUsService(_id)
        .then((responce) => {
            if (responce.status === 200) {
                window.location.reload();
            }
            console.log('responce ', responce);
        })
        .catch((error) => {
            console.log('error post Upload', error);
        });
};