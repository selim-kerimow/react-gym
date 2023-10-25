import '../css/join.css'


const Join: React.FC = () => {


    return (
        <div className='join' id='join-now'>

            <div className='join-left'>
                <div className='join-line'></div>
                <div>
                    <span className='stroke-text'>READY TO</span> 
                    <span>LEVEL UP</span>                     
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>

            <div className='join-right'>
                <div className='join-wrapper'>
                    <input placeholder='Enter Your Email Address'/>
                    <button>Join</button>                    
                </div>

            </div>

        </div>
    )
}

export default Join