// This code snippet prevents the user from clicking the forward browser btn. It is usefull here bc the user shouldn't navigate back & forth without acknowledging(first page), or submitting again the form.

// window.onload = function () {
//   // Push a new state into the history stack
//   history.pushState(null, null, window.location.href);

//   // Listen for the popstate event, which is triggered when navigating back
//   window.onpopstate = function (event) {
//     // Push the same state to block back navigation
//     history.pushState(null, null, window.location.href);
//   };
// };
