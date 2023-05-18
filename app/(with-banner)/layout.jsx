
export default function Layout ( {children}) {
    return (
        <div>
           <marquee style={{background: '#fff', color: 'red'}}>Home &bull; Posts</marquee >
            
            {children}
        </div>
    )
}