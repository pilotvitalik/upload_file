const initialState = {
	files: [],
	count: 0,
};

function countFiles(count, data){
	return count = Object.values(data).length;
}

function zeroingCount(count, data){
	return count = data;
}

export default function countReducer(state = initialState, action){
	switch(action.type){
		case 'addFiles/count':
			return {
				...state,
				count: countFiles(state.count, action.payload)
			}
		case 'addFiles/zeroingCount':
			return {
				...state,
				count: zeroingCount(state.count, action.payload)
			}
		default:
			return state;
	}
}