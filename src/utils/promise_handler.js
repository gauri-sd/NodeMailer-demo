/*
 * Created on Fri Aug 09 2019
 *
 * Created by sudhir.raut@iauro.com
 * Copyright (c) 2019 iauro Systems Pvt. Ltd.
 */

 /**
  * Function to handle errors in promises
  */
module.exports = promise => {
    return promise.then(data => {
        return [null, data];
    })
    .catch(err => [err]);
 };
