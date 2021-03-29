
import * as axios from "axios";

// let token = document.cookie.split(';')[0].toString().slice(6)

let token = sessionStorage.getItem('token')

let instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7777/',
    headers: {
        "Authorization": "Bearer " + sessionStorage.getItem('token')
    }
})

let instanceWithoutToken = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7777/'
})
            /* Authentication */

export const DAL_Login = (values) => {
    return instanceWithoutToken.post(
        'authentication/login',
        values,
    ).then(
        (res) => {
           return res
        }
    ).catch(
        (error) => {
            alert(error)
            console.log(error)
            return error
        }
    )
}

export const DAL_Registration_client = (values) => {
    console.log('Registration of client in progress')
    return instanceWithoutToken.post(
        '/authentication/registration',
        values
    ).then(
        (res) => {
            return res
        }
    ).catch(
        (error) => {
            return error
        }
    )
}

export const DAL_Registration_OSBB = (values) => {
    console.log('Registration of osbb in progress')
    return instanceWithoutToken.post(
        '/authentication/registration/osbb',
        values
    ).then(
        (res) => {
            return res
        }
    ).catch(
        (error) => {

            return error
        }
    )
}

        /* Registration of new OSBB */


export const DAL_RegisterNewOSBB = (newOSBBInfo) => {
    return instanceWithoutToken.post(
        `/osbb/registration`,
        newOSBBInfo
    ).then(
        (res) => {
            return res.data
        }
    ).catch(
        (error) => {
            alert(error.message)
            return error.error
        }
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

export const DAL_Vote = (vote) => {
    console.log('Sending vote')
    return instance.post(
        `/vote`,
        vote
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

export const DAL_GetCLIENTCabinet = () => {
    console.log('Getting users cabinet in progress')

    return instance.get(
        `users/cabinet`
    ).then(
        (res) => {

            return res.data
        }
    ).catch(
        (error) => {
            alert(error.message)
            return error
        }
    )
}

export const DAL_GetOSBBSCabinet = () => {
    console.log('Getting OSBBs cabinet in progress')

    return instance.get(
        `/osbb/cabinet`
    )
    .then(
        (res) => {

            return res.data
        }
    ).catch(
        (error) => {
            alert(error.message)
            return error
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

        /* Operations with apartments */

export const DAL_CreateNewApartment = (newApartmentOptions) => {
    // attach apartment to user account by key
    return instance.post(
        `/apartment`,
        newApartmentOptions
    ).then(
        (res) => {
            return res
        }
    ).catch(
        (error) => {
            return error
        }
    )
}

export const DAL_AttachApartmentToUser = (ownerKey) => {
    // attach apartment to user account by key
    return instance.put(
        `/apartment/key/${ownerKey}`,
    ).then(
        (res) => {
            alert(res.message)
            return res.data
        }
    ).catch(
        (error) => {
            alert(error.message)
            return error
        }
    )
}

export const DAL_GenerateApartmentKey = (apartmentId) => {
    // generates new apartment key, that uses for attaching apartment to user account

    return instance.get(
        `/apartment/${apartmentId}/key`,
    ).then(
        (res) => {
            console.log(res)
            return res
        }
    ).catch(
        (res) => {
            alert(res.message)
            return res.error
        }
    )
}

export const DAL_DeleteApartment = (apartmentId) => {
    // deleting apartment by ID
    return instance.delete(
        `/apartment/${apartmentId}`,
    ).then(
        (res) => {

            console.log(res)
            return res
        }
    ).catch(
        (res) => {
            alert(res.message)
            return res.error
        }
    )
}

export const DAL_DetachApartment = (userId) => {
    // detaching apartment from user
    return instance.put(
        `/apartment/${userId}/detach`,
    ).then(
        (res) => {
            alert(res.message)
            return res.data
        }
    ).catch(
        (res) => {
            alert(res.message)
            return res.error
        }
    )
}


