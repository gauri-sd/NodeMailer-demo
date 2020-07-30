

/**
 * Response Class creates the response object
 * in required format.
 */
class Response {

    /**
     *
     * @param is_success
     * @param result
     * @param message
     * @param status_code
     * @returns 
     */
    static sendResponse(is_success,result,message,status_code) {
        return {
            is_success,
            result,
            message,
            status_code};
    }
}

module.exports = Response;

