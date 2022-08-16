
import { Post } from './components/Post'

function App() {

  const posts = [
    {
      id: "0",
      userName: "Anthony Carvalho",
      avatar: "https://avatars.githubusercontent.com/u/18013936?s=400&u=e4a393ee9e0d662a666364083458f63dc0ac4489&v=4",
      content:
        "Aut amet magnam. Exercitationem et cupiditate unde voluptas est et. Est explicabo repellat voluptas dicta qui. Laboriosam sapiente quasi maxime omnis accusantium quo.",
    },
    {
      id: "1",
      userName: "Yago Franco Neto",
      avatar: "https://avatars.githubusercontent.com/u/18013936?s=400&u=e4a393ee9e0d662a666364083458f63dc0ac4489&v=4",
      content:
        "Atque ipsam maxime blanditiis dolor ducimus. Adipisci quis occaecati natus qui saepe. Est ea porro est nisi magni voluptate consequatur sint reprehenderit. Quas aut quae et ex sed illum. Minima magni fugit omnis vel rerum distinctio. Voluptas consequatur corporis natus mollitia est eos neque et exercitationem.",
    },
    {
      id: "2",
      userName: "Yago Franco Neto",
      avatar: "https://avatars.githubusercontent.com/u/18013936?s=400&u=e4a393ee9e0d662a666364083458f63dc0ac4489&v=4",
      content:
        "Atque ipsam maxime blanditiis dolor ducimus. Adipisci quis occaecati natus qui saepe. Est ea porro est nisi magni voluptate consequatur sint reprehenderit. Quas aut quae et ex sed illum. Minima magni fugit omnis vel rerum distinctio. Voluptas consequatur corporis natus mollitia est eos neque et exercitationem.",
    },
  ]

  return (
   <>
   {posts.map((post, index) => (
    <Post
      key={index}
      content={post.content}
      userName={post.userName}
      avatarUrl={post.avatar}
    />
   ))}
    
   </>
  )
}

export default App
