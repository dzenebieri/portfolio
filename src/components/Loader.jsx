import { Html } from '@react-three/drei';

const CanvasLoader = () => {
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span className='canvasLoaderCS'></span>
    </Html>
  );
};

export default CanvasLoader;
