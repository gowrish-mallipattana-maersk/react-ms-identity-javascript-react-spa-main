========================================
REFERENCES
========================================
Main reference: Quickstart - https://docs.microsoft.com/en-us/azure/active-directory/develop/single-page-app-quickstart?pivots=devlang-react
Other reference: Tutorial - https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react

Other reference (with just "msal" package) - https://adrianhall.github.io/javascript/react/2020/03/06/msal-react-redux/

Decoding JWT - https://www.codegrepper.com/code-examples/javascript/react+decode+jwt

========================================
NOTES
========================================
For printing and decoding JWT - see App.jsx
For printing user info - see ProfileData.jsx

========================================
ISSUE - CORS ISSUE WITH GRAPH
========================================
To avoid cors issue with microsoft graph, in authConfig.js,
use v1.0/me endpoint (which is the original one) --> as in the quickstart - https://docs.microsoft.com/en-us/azure/active-directory/develop/single-page-app-quickstart?pivots=devlang-react)
do not use just "https://graph.microsoft.com" --> as suggested in the other tutorial (https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react)

export const graphConfig = {
    //graphMeEndpoint: "https://graph.microsoft.com" // this gave CORS error
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me" // this did NOT give CORS error
};
