import React, { createContext, useState, useContext, useMemo } from "react";

//Este hook esta pensado para validar un usuario, en esta ocación se lo usa solo para que se evalúe si se debe mostrar o no
//una redirección para el login en caso de que haya un usuario NO logueado.
//La idea es tener un prototipo que permita la extensión para luego realizar validaciones y obtener datos del usuario actual.

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();

  //Se usa useMemo para poder mantener el valor del usuario en toda la aplicación
  const value = useMemo(() => auth, [auth.isLogged]);
  return (
    <authContext.Provider value={value}>
      {useMemo(
        () => (
          <>{children}</>
        ),
        []
      )}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [isLogged, setIsLogged] = useState(false);

  //Si el usuarioes válido, toma el valor de true
  function signIn() {
    setIsLogged(true);
  }

  //Si el usuario se desloguea, se pone en false
  const signOut = () => {
    setIsLogged(false);
  };

  return {
    isLogged,
    setIsLogged,
    signIn,
    signOut,
  };
}


