const initState = {
    projects:[
        {id: '1', title: 'Shakruddin', content: 'blah blah blah'},
        {id: '2', title: 'Aslam', content: 'blah blah blah'},
        {id: '3', title: 'Shahbaz', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer