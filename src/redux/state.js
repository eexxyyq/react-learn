import renderEntireTree from "../render";

let state = {
    navbarPage: {
        avatarData: [
            {id: '1', url: 'https://i7.pngflow.com/pngimage/246/366/png-computer-icons-avatar-user-profile-man-avatars-logo-monochrome-black-desktop-wallpaper-clipart.png'},
            {id: '2', url: 'https://i7.pngflow.com/pngimage/246/366/png-computer-icons-avatar-user-profile-man-avatars-logo-monochrome-black-desktop-wallpaper-clipart.png'},
            {id: '3', url: 'https://i7.pngflow.com/pngimage/246/366/png-computer-icons-avatar-user-profile-man-avatars-logo-monochrome-black-desktop-wallpaper-clipart.png'}
        ]
    },
    profilePage: {
        postsData : [
            {id: '1', message: 'Hello World'},
            {id: '2', message: 'My first post'},
            {id: '3', message: 'My second post'},
            {id: '4', message: 'again Hello World'},
            {id: '5', message: 'and again new post'},
            {id: '6', message: null}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData : [
            {id: '1', name: 'Andrew'},
            {id: '2', name: 'Eliza'},
            {id: '3', name: 'Semen'},
            {id: '4', name: 'Petr'},
            {id: '5', name: 'Elly'}
        ],

        messagesData : [
            {id : '1', message: 'How r u?', ownerId: '1'},
            {id : '2', message: 'Hello!', ownerId: '2'},
            {id : '3', message: 'Some new msg', ownerId: '1'}
        ]
    }
}

export let addPost = () => {
    state.profilePage.postsData.push({
        id: '5',
        message: state.profilePage.newPostText
    })
    updateNewPostText('')
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export default state