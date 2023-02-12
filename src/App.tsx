import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css';

import './global.css';

// author: { avatar_url:"", name:"", role:""}
// publishedAt: Date
// content: String

const posts  =[
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/janet-lang.png',
      name:'Jane M.',
      role: 'Programador FrontEnd'
    },
    content: [
      {type: 'paragraph', content: 'At vero eos 👋'},
      {type: 'paragraph', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-04 23:13:01')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/profrenatopenha.png',
      name:'Jhon F. Silva',
      role: 'Programador BackEnd'
    },
    content: [
      {type: 'paragraph', content: 'Suspendisse elit nisi 👋'},
      {type: 'paragraph', content: 'Vestibulum porttitor mi placerat purus tempus dictum. Duis interdum, tellus id molestie interdum, mauris risus efficitur nunc, in vestibulum eros justo vitae dui. 🚀'},
      {type: 'link', content: '👉 enaj.design/turpis'},
    ],
    publishedAt: new Date('2023-01-03 10:36:15')
  }
]

//iteração pesrcorrer os posts
export function App() {
 
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          {posts.map(post =>{
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}
