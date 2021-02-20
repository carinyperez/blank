import Form from "../form/form.component";
import './homepage.styles.scss'; 

const HomePage = () => {
    return (
            <div className='chirper'>
                <h1>Chirper</h1>
                <h1 className='chirper-colored'>Chirper</h1>
                <p className='sign-up-free'>Sign Up for free</p>
                <Form/>
            </div>
    )
}

export default HomePage; 

