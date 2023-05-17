import {Counter} from './Counter.jsx'

export default function PostsLayout ( {children}) {
    return (
        <div>
           <small>Home &bull; Posts</small>
            
            {children}
        </div>
    )
}