import './button.css'
const Button = ({label, icon, showIcon = true, onClick, className = ''}) =>{
    return (
        <div>
            <button onClick={onClick} className={`btn ${className}`}>
                <span className='btn-label'>{label}</span>
                {showIcon && icon && <span className='btn-icon'>{icon}</span>}
            </button>
        </div>
    )
}
export default Button