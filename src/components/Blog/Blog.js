import React from 'react';



const Blog = () => {
    return (
        <div>
            <br /><br />
            <div className="container">
                <h1 className="text-center title my-5">Blogs</h1>
                <h3>What is Context API?</h3>
                <p className='text-success'>The React framework's Context API is a component structure that allows us to communicate specific types of data across all layers of the application. It's designed to address the issue of prop drilling.
                    The Context API has always existed, but it was deemed experimental at the time. As time went on, the API became more stable, and version 16.3 was released.
                    The functionality was released and is now regarded a new addition to the long list of features that make React such a great framework.</p>
                <hr />
                <h3>What is Semantic tag?</h3>
                <p className='text-success'>Semantic HTML5 overcomes this deficiency by adding particular tags that explicitly explain what role the content included in those tags plays. This explicit information is beneficial to robots and crawlers. Google and Bing, for example, are trying to figure out which material is significant, which isn't, which is for navigation, and so on.

                    You can add more information to your website by using semantic HTML tags. It aids Google and Bing in deciphering the functions and relative importance of the various elements on your website.</p>
            </div>
        </div>
    );
};

export default Blog;