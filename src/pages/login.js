import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonLoading,
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Nuevo estado
  const history = useHistory();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Por favor, completá ambos campos.');
      return;
    }

    setError('');
    setLoading(true); // Mostrar spinner

    // Simulamos una espera de 1 segundo
    setTimeout(() => {
      setLoading(false); // Ocultar spinner
      history.push('/home'); // Redirigir al home
    }, 1000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonInput
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value ?? '')}
          clearInput
        />

        <IonInput
          type="password"
          placeholder="Contraseña"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value ?? '')}
          clearInput
        />

        {error && (
          <IonText color="danger">
            <p className="ion-padding-top">{error}</p>
          </IonText>
        )}

        <IonButton expand="full" onClick={handleLogin}>
          Iniciar Sesión
        </IonButton>

        <IonLoading
          isOpen={loading}
          message={'Iniciando sesión...'}
          spinner="circles"
          duration={0} // No se cierra automáticamente
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;