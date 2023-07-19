import { client, METHODS } from 'services/api/restClient';
import { GET_USERS , POST_USERS , DELETE_USERS , PUT_USERS, POST_CONTACTUS, GET_CONTACTUS, DELETE_CONTACTUS} from 'services/url';



export const getUserService = async () => {
    return await client.API(METHODS.GET, GET_USERS , {}, '');
};

export const postUserService = async (name,email,points) => {
    
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        name: name,
        email:email,
        points:points
    };
    return await client.API(METHODS.POST,POST_USERS, body, headerConfig);
}

export const deleteUserService = async (_id) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        _id:_id
    };
    return await client.API(METHODS.DELETE, DELETE_USERS, body, headerConfig);
};


export const updateUserService = async (_id, name , country, aboutMe , address , contactPhone) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        _id:_id,
        name:name,
        country:country,
        aboutMe:aboutMe,
        address:address,
        contactPhone:contactPhone
        // email:email,
        // points:points,
    };
    return await client.API(METHODS.PUT, PUT_USERS, body, headerConfig);
};

export const getContactUsServices = async () => {
    return await client.API(METHODS.GET, GET_CONTACTUS, {}, '');
};

export const contactUsService = async ( userId,firstName, lastName, email, message) => {
    console.log('checked2')
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        userId:userId,
        firstName: firstName,
        lastName:lastName,
        email:email,
        message:message
    };
    return await client.API(METHODS.POST,POST_CONTACTUS, body, headerConfig);
}


export const deleteContactUsService = async (_id) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        _id:_id
    };
    return await client.API(METHODS.DELETE, DELETE_CONTACTUS, body, headerConfig);
};