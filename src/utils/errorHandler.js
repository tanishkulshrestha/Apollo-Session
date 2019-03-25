import {
    UserInputError,
    AuthenticationError,
    ForbiddenError,
    ApolloError,

} from 'apollo-server';


export const statusCode = {
    BAD_REQUEST: 400,
    UNAUTHENTICATED: 401,
    FORBIDDEN: 403,
    SERVER_ERROR: 500,
}

export const errorHandler = (err) => {
    const message = err.message || 'Internal Server Error';
    const status = err.status || 500;
    const { error } = err;
    switch (status) {
        case statusCode.BAD_REQUEST: throw new UserInputError(message, error);
        case statusCode.UNAUTHENTICATED: throw new AuthenticationError(message, error);
        case statusCode.FORBIDDEN: throw new ForbiddenError(message, error);
        case statusCode.SERVER_ERROR: throw new ApolloError(message, error);
        default: throw new ApolloError(message, error);
    }
}
