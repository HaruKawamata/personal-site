import sandwichButton from "@images/buttons/blog-sandwich.png"
import genderButton from "@images/buttons/blog-gender.png"
import langblrButton from "@images/buttons/blog-langblr.png"
import myArtButton from "@images/buttons/blog-my-art.png"
import utenaNotesButton from "@images/buttons/utena-notes.png"
import allPostsButton from "@images/buttons/blog-all-posts.png"

// `tag` is the value used in post frontmatter; null matches every post
export const blogTags = [
  {
    path: "rosasafi",
    tag: "rosasafi",
    title: "ROSASAFI",
    description: "Reviews of sandwiches and sandwich adjacent food items",
    button: sandwichButton,
  },
  {
    path: "gender",
    tag: "gender",
    title: "Gender",
    description: "Posts about gender",
    button: genderButton,
  },
  {
    path: "language",
    tag: "language",
    title: "Language",
    description: "Posts about linguistics and language learning",
    button: langblrButton,
  },
  {
    path: "my-art",
    tag: "my art",
    title: "My Art",
    description: "Things I've made",
    button: myArtButton,
  },
  {
    path: "utena-fansub",
    tag: "utena fansub",
    title: "Utena Fansub",
    description: "Translation notes for my Revolutionary Girl Utena fansub",
    button: utenaNotesButton,
  },
  {
    path: "all",
    tag: null,
    title: "All Posts",
    description: "Every post on the blog",
    button: allPostsButton,
  },
]
