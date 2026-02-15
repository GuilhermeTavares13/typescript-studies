interface Post {
    id: number;
    description: string;
    authorId: number;
}

// Interfaces can be extendable after initialization
interface Post {
    date: Date;
}


interface BlogPost extends Post {
    imgSrc: string;
}

let onePost: Post = {id: 1, description: 'first post', authorId: 1, date: new Date()};

let anotherPost: BlogPost = {id: 1, description: 'first blog post', authorId: 1, imgSrc: '/imgsrc', date: new Date()};


// extended types, although not as perfomatic as described in the official docs

type PostType = {
    id: number;
    description: string;
    authorId: number;
}


// types can't be extendable after initialization
// type PostType = {
//     date: Date
// }

type BlogPostType = PostType & {
    imgSrc: string;
}

let onePostType: PostType = {id: 1, description: 'first post type', authorId: 1};

let anotherPostType: BlogPostType = {id: 1, description: 'first blog post type', authorId: 1, imgSrc: '/imgsrc'};



