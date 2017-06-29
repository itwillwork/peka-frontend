import loader from './loader';

export default (TYPES) => {
    return (state = loader.initial(), action) => {
        switch (action.type) {
            case TYPES[0]: {
                return loader.begin();
            }
            case TYPES[1]: {
                return loader.success(action.payload);
            }
            case TYPES[2]: {
                return loader.error(action.payload);
            }
            default:
                return state;
        }
    }
};