import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from 'components/Cabecalho';
import Carregando from 'components/Carregando';
import Footer from 'components/Footer';

const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const InterfaceJogo = lazy(() => import('pages/InterfaceJogo'));

export default function AppRouter() {
  return (
    <Router>
      <Cabecalho />
      <main>
        <Suspense fallback={<Carregando />}>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/fase/:id' element={<InterfaceJogo />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </Router>
  );
}