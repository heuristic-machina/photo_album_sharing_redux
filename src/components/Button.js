import className from 'classnames';
import { GoSync } from 'react-icons/go';

function Button({
  children,
  loading,
  ...rest
}) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border h-8',
    {
      'opacity-80': loading,
    }
  );
  
  return (

    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className='animate-spin'/> : children}
    </button>
  );
}


export default Button;
