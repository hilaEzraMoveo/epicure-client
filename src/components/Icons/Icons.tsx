import './Icons.scss'
import iconData from '../../constants/IconData'

const Icons = () => {

    const icons: {name: string, img: string}[] = iconData;

    return(
        <div className='icons-container'>
            <p className='icons-title'>the meaning of our icons:</p>
            <div className='icons'>
                {icons.map((icon) => (
                    <div className='icon' key={icon.name}>
                        <img className='image' alt='Icon' src={icon.img} />
                        <h3 className='name'>{icon.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Icons;