let fileLogger = function(msg) {
    
    
    // puts the message in a file
}

function logError(msg, logger) {
    let errorMsg = 'ERROR:' + msg;
    logger(errorMsg);

}

console.log(logError('Something broke!', fileLogger));
