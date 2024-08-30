export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/117594913?s=400&u=5100826171be9a5d5f286f4f2ffa5f070e6166f9&v=4";

export const API_OPTIONS = {
    method:"GET",
    headers:{
        accept:"application/json",
        Authorization:"Bearer "+process.env.REACT_APP_BEREAR_KEY,
    },
};

export const IMG_CDL_URL = "https://image.tmdb.org/t/p/w500"

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg";

export const LANGUAGE = [
    {identifier:"en",langName:"English"},
    {identifier:"hindi",langName:"Hindi"},
    {identifier:"arabic",langName:"Arabic"},
]