// additional parameters can be added to the function.
function recursive_promise(count) {
  axios.get(www.google.com)
  .then(function(response1) {
    // do whatever mapping and manipulation you want over the object.
    // we need to return the response to retain the promise.
    return response1
  })
  .then(function(response2) {
    return count > 0 ? recursive_promise(--count) : response2
  })
}
recursive_promise(4)
