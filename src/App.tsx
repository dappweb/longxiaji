import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
const NotFound = lazy(() => import('./pages/NotFound'));

const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const Skills = lazy(() => import('./pages/Skills'));
const Cases = lazy(() => import('./pages/Cases'));
const News = lazy(() => import('./pages/News'));
const About = lazy(() => import('./pages/About'));
const Preorder = lazy(() => import('./pages/Preorder'));
const Support = lazy(() => import('./pages/Support'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const AdminAnnouncements = lazy(() => import('./pages/AdminAnnouncements'));

function PageLoading() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600">{t('loading')}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="skills" element={<Skills />} />
            <Route path="cases" element={<Cases />} />
            <Route path="news" element={<News />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<About />} />
            <Route path="preorder" element={<Preorder />} />
            <Route path="support" element={<Support />} />
            <Route path="admin/announcements" element={<AdminAnnouncements />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
