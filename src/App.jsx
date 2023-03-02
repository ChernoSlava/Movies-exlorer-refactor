/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Loader } from './components/Preloader';
import { AppLayout, Main, Popup, ProtectedRoute } from './components';
import { ROUTER_PATH } from './constants';
import {
  ErrorPageContainer,
  HeaderContainer,
  LoginContainer,
  ProfileContainer,
  RegisterContainer,
} from './containers';
import { AuthContext, CurrentUserContext, MoviesContext } from './contexts';
import { Movies, SavedMovies } from './pages';
import { baseTheme } from './theme';
import { mainApi } from './utils';

export function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginProcess, setLoginProcess] = useState(false);
  const [isRegisterProcess, setRegisterProcess] = useState(false);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [user, setUser] = useState({});
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [text, setText] = useState('Норм');

  const navigate = useNavigate();

  const handlePopupIsOpen = () => {
    setPopupIsOpen(true);
  };
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    mainApi.setToken(jwt);
    if (jwt) {
      mainApi
        .getUserInfoFromServer()
        .then(data => {
          if (data) {
            setUser(data);
            setLoggedIn(true);
          } else {
            navigate(ROUTER_PATH.LOGIN);
          }
        })
        .catch(() => {
          setIsSuccess(false);
          setText('Произошла ошибка');
          handlePopupIsOpen();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  const handleClosePopup = () => {
    setPopupIsOpen(false);
  };
  const handleAuthorization = data => {
    setLoginProcess(true);
    mainApi
      .login(data)
      .then(res => {
        setIsSuccess(true);
        if (res && res.token) {
          setLoggedIn(true);
        }
        localStorage.setItem('jwt', res.token);
        navigate(ROUTER_PATH.MOVIES);
        setText('Добро пожаловать');
      })
      .catch(() => {
        setIsSuccess(false);
        setText('Ошибка с авторизацией');
      })
      .finally(() => {
        handlePopupIsOpen();
        setLoginProcess(false);
      });
  };
  const handleRegistration = data => {
    setRegisterProcess(true);
    const { email, password } = data;
    mainApi
      .register(data)
      .then(res => {
        setIsSuccess(true);
        if (res._id) {
          setUser(res.data);
        }
        handleAuthorization({ email, password });
        setText('Добро пожаловать');
      })
      .catch(() => {
        setIsSuccess(false);
        setText('Ошибка с регистрацией');
      })
      .finally(() => {
        handlePopupIsOpen();
        setRegisterProcess(false);
      });
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    setIsLoading(true);
    setSavedMoviesList([]);
    setUser({});
    setPopupIsOpen(false);
    setIsSuccess(true);
    setText('Норм');
    setRegisterProcess(false);
    setLoginProcess(false);

    localStorage.clear();

    navigate(ROUTER_PATH.MAIN);
  };

  const handleChangeProfile = ({ name, email }) => {
    mainApi
      .setUserInfoToServer({ name, email })
      .then(userData => {
        setIsSuccess(true);
        setUser(userData);
        setText('Данные изменены');
      })
      .catch(() => {
        setIsSuccess(false);
        setText('Ошибочка вышла');
      })
      .finally(() => {
        handlePopupIsOpen();
      });
  };

  const handleSaveFilm = film => {
    mainApi
      .saveNewFilm(film)
      .then(newFilm => setSavedMoviesList([...savedMoviesList, newFilm]))
      .catch(() => {
        setIsSuccess(false);
        setText('Не удалось сохранить фильм');
        handlePopupIsOpen();
      });
  };

  const handleDeleteFilm = film => {
    const savedFilm = savedMoviesList.find(
      x => x.movieId === film.id || x.movieId === film.movieId,
    );
    mainApi
      .deleteFilm(savedFilm._id)
      .then(() => {
        const newSavedFilms = savedMoviesList.filter(x => {
          if (film.id === x.movieId || film.movieId === x.movieId) {
            return false;
          }
          return true;
        });
        setSavedMoviesList(newSavedFilms);
      })
      .catch(() => {
        setIsSuccess(false);
        setText('Не удалось удалить фильм');
        handlePopupIsOpen();
      });
  };

  useEffect(() => {
    if (loggedIn && user) {
      mainApi
        .getSavedFilms()
        .then(data => {
          const personalSavedFilms = data.filter(x => x.owner === user._id);
          setSavedMoviesList(personalSavedFilms);
        })
        .catch(() => {
          setIsSuccess(false);
          setText('Не удалось получить карточки:(');
          handlePopupIsOpen();
        });
    }
  }, [loggedIn, user]);

  const authContextValue = useMemo(
    () => ({
      loggedIn,
      isLoginProcess,
      isRegisterProcess,
      onAuthorization: handleAuthorization,
      onRegistration: handleRegistration,
      onSignOut: handleSignOut,
      onChangeProfile: handleChangeProfile,
    }),
    [
      loggedIn,
      isLoginProcess,
      isRegisterProcess,
      handleAuthorization,
      handleRegistration,
      handleChangeProfile,
      handleSignOut,
    ],
  );

  const moviesContextValue = useMemo(
    () => ({
      savedMoviesList,
      onSaveFilm: handleSaveFilm,
      onDeleteFilm: handleDeleteFilm,
    }),
    [handleDeleteFilm, handleSaveFilm, savedMoviesList],
  );

  return (
    <ThemeProvider theme={baseTheme}>
      {isLoading ? (
        <Loader />
      ) : (
        <CurrentUserContext.Provider value={user}>
          <AuthContext.Provider value={authContextValue}>
            <MoviesContext.Provider value={moviesContextValue}>
              <Routes>
                <Route
                  path={ROUTER_PATH.MAIN}
                  element={
                    <AppLayout>
                      <Popup
                        isOpen={popupIsOpen}
                        onClose={handleClosePopup}
                        isSuccess={isSuccess}
                        text={text}
                      />
                    </AppLayout>
                  }>
                  <Route
                    index
                    element={<Main header={<HeaderContainer />} />}
                  />
                  <Route
                    path={ROUTER_PATH.LOGIN}
                    element={<LoginContainer />}
                  />
                  <Route
                    path={ROUTER_PATH.REGISTER}
                    element={<RegisterContainer />}
                  />
                  <Route
                    path={ROUTER_PATH.MOVIES}
                    element={
                      <ProtectedRoute>
                        <Movies />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path={ROUTER_PATH.SAVED_MOVIES}
                    element={
                      <ProtectedRoute>
                        <SavedMovies />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path={ROUTER_PATH.PROFILE}
                    element={
                      <ProtectedRoute>
                        <ProfileContainer />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path={ROUTER_PATH.ALIEN}
                    element={<ErrorPageContainer />}
                  />
                </Route>
              </Routes>
            </MoviesContext.Provider>
          </AuthContext.Provider>
        </CurrentUserContext.Provider>
      )}
    </ThemeProvider>
  );
}
