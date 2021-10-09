export default {

    // API propeties
    API: {

        // api host name
        host: 'https://expenses-kawlik.herokuapp.com',

        // login requests
        auth: {

            facebook: 'https://expenses-kawlik.herokuapp.com/auth/facebook',
        },

        // api links
        link: {

            // links related to expense
            expense: {

                get: {

                    findAllBy_listID: '/expense/list/',
                },
                
                post: {

                    addNewBy_listID: '/expense/add/',
                },

                put: {

                    argueBy_expenseID: '/expense/argue/'
                },
            },

            // links related to list
            list: {

                get: {

                    findAllBy_userID: '/list/all/',
                },

                post: {

                    addNewBy_userID: '/list/new/',
                },

                put: {

                    lockBy_listID: '/list/locl/',
                },
            },

            // links related to user
            user: {

                get: {

                    findOneBy_auth: '/user/auth/',
                    findOneBy_name: '/user/name/',
                    findOneBy_userID: '/user/id/',
                },

                post: {

                    addNewAsFriendBy_userID: '/user/add/',
                },

                put: {

                    deleteUserAsFriend_userID: '/user/delete/',
                },
            },
        },
    },

    // view selects
    views: {
        
        list: [ 'saved', 'active', 'profile' ],

        name: {

            saved: 'saved',
            
            active: 'active',
            
            profile: 'profile',
        }
    }, 
};