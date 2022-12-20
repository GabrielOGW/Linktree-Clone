import './RedesSociais.css'
const RedesSociais = () => {
  
  const ListaRedes = [
    {id:1, rede: 'GitHub', url: 'https://github.com/GabrielOGW'},
    {id:2, rede: 'Instagram', url: 'https://www.instagram.com/gabriel.ogw/'},
    {id:3, rede: 'Twitter', url: 'https://twitter.com/GabrielOGW'},
    {id:4, rede: 'LinkedIn', url: 'https://www.linkedin.com/in/gabriel-ogassawara-5297a0205/'},
    {id:5, rede: 'Discord', url: ''}
  ]

  const LinksRedes = ListaRedes.map((props) => 
    <div key={props.id} className='conteudo_links'>
      <a href={props.url}>{props.rede}</a>
    </div>
  )
  
  return (
    <>
     {LinksRedes}
    </>
  )
}
export default RedesSociais