import React, {createContext, useState} from 'react'

export const blogPageContext = createContext();

export const BlogPageProvider = ({children}) => {
    const [blogPage, setBlogPage] = useState(null);

    return (
        <blogPageContext.Provider value={{blogPage, setBlogPage}}>
            {children}
        </blogPageContext.Provider>
    )
}

export default BlogPageProvider;
