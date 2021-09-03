
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(ninja => {
    return {
      params: {
        id: ninja.id.toString(),
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: data,
  }
}

const NinjaDetails = (props) => {

  const {
    name,
    phone,
    email,
    website
  } = props

  return ( 
    <div>
      <h1>Details Page</h1>
      <h2>Name: {name} </h2>
      <h2>Phone: {phone} </h2>
      <h2>Email: {email} </h2>
      <p>Visit my <a href={website}>website</a>!</p>
    </div>
   );
}
 
export default NinjaDetails;