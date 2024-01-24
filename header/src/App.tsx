import { useState } from 'react';
import { serverClient, InitialData, ActionOutput } from 'oc-server';
import styles from './styles.css';
import logo from '../public/logo.png';
type AdditionalData = ActionOutput<'funFact'>;
const App: React.FC<InitialData> = (props: InitialData) => {
  const { firstName, lastName, born, hobbies } = props;
  const [additionalData, setAdditionalData] = useState<AdditionalData | null>(
    null
  );
  const [error, setError] = useState('');

  const getFunFact = async () => {
    setError('');
    try {
      const data = await serverClient.funFact({ year: born });
      setAdditionalData(data);
    } catch (err) {
      setError(String(err));
    }
  };

  if (error) {
    return <div>Something wrong happened!</div>;
  }

  return (
    
    <div className={styles.container}>
      <img width="50" height="50" src={logo} alt="Logo" />
      <h1 style={{ margin: '0 0 20px 0' }}>
        Hello, <span style={{ textDecoration: 'underline' }}>{firstName}</span>{' '}
        {lastName}
      </h1>
      <div className={styles.info}>
        <div className={styles.block}>Born: {born}</div>
        <div className={styles.block}>
          Hobbies: {hobbies.map((x) => x.toLowerCase()).join(', ')}
        </div>
      </div>
      {additionalData && <div>{additionalData.funFact}</div>}

      {/* Use the appropriate URL for navigating to the footer component */}
      <a
        href="http://localhost:3040/footer/1.0.0/~preview/?__ocAcceptLanguage=*&"
        className={styles.button}
      >
        Go to Footer
      </a>
      
    </div>

  );
};

export default App;
