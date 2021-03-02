
import * as axios from "axios";

let token = document.cookie.split(';')[0].toString().slice(6)


let instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7777/',
    headers: {
        // "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + token
    }
})

            /* Authentication */

export const DAL_Login = (values) => {
    console.log('LogIn is calling')
    // console.log(values)
    return instance.post(
        'authentication/login',
        values,
    )
}

export const DAL_Registration = (values) => {
    console.log('Registration in progress')
    return instance.post(
        '/authentication/registration',
        values
    )
}



export const DAL_GetUserInfo = (userId) => {
    console.log('Getting user in progress')
    return instance.get(
        `users/${userId}`,
    )
}

            /* Operations with Archive pools */

export const DAL_GetPollsArchive = () => {
    console.log('Getting archive voting in progress')
    return instance.get(
        `/polls/archive`,
    ).then(
        (res) => {
            return res.data
        }
    ).catch(
        (res) => {
            return res.error
        }
    )
}

export const DAL_GetPollsArchiveQuestion = (questionId) => {
    console.log('Getting archive voting in progress')
    return instance.get(
        `/polls/archive/${questionId}`,
    )
}

        /* Operations with Active pools */

export const DAL_GetPollsActive = () => {
    console.log('Getting active voting in progress')
    return instance.get(
        `/polls/osbb/active`,
    ).then(
        (res) => {
            return res.data
        }
    ).catch(
        (res) => {
            return res.error
        }
    )
}

export const DAL_CreateNewVoting = (values) => {
    console.log('Create newVoting in in progress')

    return instance.post(
        `/polls/create-poll`,
        values
    )
}

        /* Operations with pools drafts */

export const  DAL_GetPollsDraft = () => {
    console.log('Getting polls drafts in progress')
    return instance.get(
        `/polls/draft`,
        ).then(
        (res) => {
            return res.data
        }
        ).catch(
        (res) => {
            console.log(res)
            return res.error
        }
    )
}

export const DAL_SetPollsDraft = (values) => {
    console.log('Getting polls drafts in progress')
    return instance.post(
        `/polls/draft`,
        values
    ).then(
        (res) => {
            return res.data
        }
    ).catch(
        (res) => {
            return res.error
        }
    )
}

export const DAL_DeletePollsDraft = (draftId) => {
    console.log('Getting polls drafts in progress')
    return instance.delete(
        `/polls/draft/${draftId}`
    ).then(
        (res) => {
            return res.data
        }
    ).catch(
        (res) => {
            return res.error
        }
    )
}

        /* Operations with cabinet */

export const DAL_GetUsersCabinet = () => {
    console.log('Getting polls drafts in progress')
    return instance.get(
        `users/cabinet`
    ).then(
        (res) => {
            return res.data
        }
    ).catch(
        (res) => {
            return res.error
        }
    )
}

        /* Operations with users */

export const DAL_GetUsersList = () => {
    console.log('Getting users in progress')
    return instance.get(
        `users/`
    ).then(
        (res) => {
            return res.data
        }
    ).catch(
        (res) => {
            return res.error
        }
    )
}

export const DAL_GetSingleUser = (userId) => {
    console.log('Getting single in progress')

    return instance.get(
        `users/${userId}`
    ).then(
        (res) => {
            return res.data
        }
    ).catch(
        (res) => {
            return res.error
        }
    )
}

export const DAL_DeleteUser = (userId) => {
    console.log('Getting single in progress')
    debugger
    return instance.delete(
        `admin/users/${userId}`
    ).then(
        (res) => {
            return res.data
        }
    ).catch(
        (res) => {
            return res.error
        }
    )
}