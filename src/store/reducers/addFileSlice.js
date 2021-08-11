const initialState = {
	files: [],
	count: 0,
};

function countFiles(count, data){
	return count = Object.values(data).length;
}

export default function countReducer(state = initialState, action){
	switch(action.type){
		case 'addFiles/count':
			return {
				...state,
				count: countFiles(state.count, action.payload)
			}
		default:
			return state;
	}
}