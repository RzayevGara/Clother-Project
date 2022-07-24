function OutfitsCard(props) {
  return (
    <li className="outfits-card">
        <img src={props.data.image} alt="icon"/>
        <p>{props.data.text}</p>
    </li>
  )
}

export default OutfitsCard