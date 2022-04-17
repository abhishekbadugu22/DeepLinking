const config = {
    screens: {
        Home: {
            path: 'home'
        },
        Profile: {
            path: 'profile/:id',
            parse: {
                id: (id) => `${id}`
            }
        },
        Notifications: {
            path: 'notifications'
        },
        Settings: {
            path: 'settings'
        }
    }
}

const linking = {
    prefixes: ['demo://app'],
    config,
}

export default linking;