
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
    img:'https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    intro:'',
    tag:'Satisfied'
    , color:'blue'
    },

    {
    img:'https://plus.unsplash.com/premium_photo-1661660106241-c9233669ed39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    intro:'',
    tag:'Underserved'
    , color:'lightseagreen'

    },

    {
    img:'https://images.unsplash.com/photo-1746114774895-133d5b677db8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    intro:'',
    tag:'Underbanked'
    , color:'BlueViolet'

    },

    {
    img:'https://plus.unsplash.com/premium_photo-1661578628554-6ee4f3984b89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
    intro:'',
    tag:'Medium'
    , color:'pink'

    },
    {
      img:'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro:'',
      tag:'Average'
    , color:'DarkOrange'

    }

  ]
  return (
    <div>

      <Section1 users={users}/>
      <Section2/>
      
    </div>
  )
}

export default App
