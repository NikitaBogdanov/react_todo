import React from 'react';
import {Redirect, Route} from 'react-router-dom';

class PrivateRoute {
    // constructor(props) {
    //
    // }
    //
    // render() {
    //     return (
    //         <Route
    //         {...rest}
    //         render = {props =>
    //             localStorage.getItem("sessionId") ? (
    //                 <Component {...props} />
    //             ) : (
    //                 <Redirect
    //                     to={{
    //                         pathname: "/login",
    //                         state: {from: props.location}
    //                     }}
    //                 />
    //             )
    //         }
    //         />
    //     )
    // }
}

// export const PrivateRoute = ({ component: Comment, ...rest }) => (
//     <Route
//         {...rest}
//         render = {props =>
//             localStorage.getItem("sessionId") ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to = {{
//                         pathname: "/login",
//                         state: {from: props.location}
//                     }}
//                 />
//             )
//         }
//     />
// );

//auth error from back, delete token

//...you can pass the current path as a prop to the redirect in your login component, and redirect to that path after the user is authenticated.