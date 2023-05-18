

const fetchComments = async (id) => {
    /*  await new Promise(resolve => setTimeout(resolve, 1000 )) */
        /* codigo throw comentado, sirve para que renderize el error.jsx */
     /* throw new Error('Error al cargar los comentarios')  */
    
     //incremental static regeneration
     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ params}) {
    const {id} = params
    const comments = await fetchComments(id)
    

    return (
       <ul style={{background: '#444', fontSize:'10px'}}>
        {comments.map(comment =>(
            <li key={comment.id}>
                <img height={'50'} width={'50'} alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                
            </li>
        ) )}
       </ul>
    )
    
  }
