/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

console.log("DEBUG - authConfig.js: env REACT_APP_GRAPH_URL is: ", process.env.REACT_APP_GRAPH_URL)
/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
    auth: {
        clientId: "8bed203a-2840-4360-856a-159369ac7306", // gowrish-poc clientId
        authority: "https://login.microsoftonline.com/05d75c05-fa1a-42e7-9cf1-eb416c396f2d",
        redirectUri: "http://localhost:3000/"
        //redirectUri: "window.location.origin"
    },
    cache: {
        //cacheLocation: "sessionStorage", // This configures where your cache will be stored
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: ["User.Read"]
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
    //graphMeEndpoint: "https://graph.microsoft.com" // this gave CORS error
    //graphMeEndpoint: "https://graph.microsoft.com/v1.0/me" // this did NOT give CORS error
    //graphMeEndpoint: "https://graph.microsoft.com/v1.0/me" // this did NOT give CORS error

   graphMeEndpoint: process.env.REACT_APP_GRAPH_URL

};
