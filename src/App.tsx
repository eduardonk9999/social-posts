
import { Post } from './components/Post'

function App() {

  const posts = [
    {
      id: "0",
      content:'Oi sou um post',
      userName:'Eduardo Silva',
      avatarUrl:'https://avatars.githubusercontent.com/u/18013936?s=400&u=e4a393ee9e0d662a666364083458f63dc0ac4489&v=4'
    },
    {
      id: "1",
      userName: "Anthony Carvalho",
      avatar: "https://cdn.fakercloud.com/avatars/tobysaxon_128.jpg",
      content:
        "Aut amet magnam. Exercitationem et cupiditate unde voluptas est et. Est explicabo repellat voluptas dicta qui. Laboriosam sapiente quasi maxime omnis accusantium quo.",
    },
    {
      id: "2",
      userName: "Yago Franco Neto",
      avatar: "https://cdn.fakercloud.com/avatars/strikewan_128.jpg",
      content:
        "Atque ipsam maxime blanditiis dolor ducimus. Adipisci quis occaecati natus qui saepe. Est ea porro est nisi magni voluptate consequatur sint reprehenderit. Quas aut quae et ex sed illum. Minima magni fugit omnis vel rerum distinctio. Voluptas consequatur corporis natus mollitia est eos neque et exercitationem.",
    },
    {
      id: "3",
      userName: "Yago Franco Neto",
      avatar: "https://cdn.fakercloud.com/avatars/strikewan_128.jpg",
      content:
        "Atque ipsam maxime blanditiis dolor ducimus. Adipisci quis occaecati natus qui saepe. Est ea porro est nisi magni voluptate consequatur sint reprehenderit. Quas aut quae et ex sed illum. Minima magni fugit omnis vel rerum distinctio. Voluptas consequatur corporis natus mollitia est eos neque et exercitationem.",
    },
  ]

  return (
   <>
    <Post
      content='Oi sou um post'
      userName='Eduardo Silva'
      avatarUrl='https://avatars.githubusercontent.com/u/18013936?s=400&u=e4a393ee9e0d662a666364083458f63dc0ac4489&v=4'
    />
   </>
  )
}

export default App
