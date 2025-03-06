import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { AuthProvider, useAuth } from './hooks/useAuth';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MenuOverlay } from './components/MenuOverlay';
import { BackToTop } from './components/BackToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingSpinner } from './components/LoadingSpinner';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

// Lazy-loaded components with proper loading
const HeroSlideshow = React.lazy(() =>
  import('./components/HeroSlideshow').then(m => ({ default: m.HeroSlideshow }))
);
const InspireSection = React.lazy(() =>
  import('./components/sections/InspireSection').then(m => ({ default: m.InspireSection }))
);
const EmpowerSection = React.lazy(() =>
  import('./components/sections/EmpowerSection').then(m => ({ default: m.EmpowerSection }))
);
const TransformSection = React.lazy(() =>
  import('./components/sections/TransformSection').then(m => ({ default: m.TransformSection }))
);
const AchieveSection = React.lazy(() =>
  import('./components/sections/AchieveSection').then(m => ({ default: m.AchieveSection }))
);
const NewsEvents = React.lazy(() =>
  import('./components/sections/NewsEvents').then(m => ({ default: m.NewsEvents }))
);
const Schools = React.lazy(() =>
  import('./components/sections/Schools').then(m => ({ default: m.Schools }))
);

// Lazy-loaded pages
const Overview = React.lazy(() =>
  import('./components/pages/Overview').then(m => ({ default: m.Overview }))
);
const Vision = React.lazy(() =>
  import('./components/pages/Vision').then(m => ({ default: m.Vision }))
);
const Chairman = React.lazy(() =>
  import('./components/pages/Chairman').then(m => ({ default: m.Chairman }))
);
const Director = React.lazy(() =>
  import('./components/pages/Director').then(m => ({ default: m.Director }))
);
const Principal = React.lazy(() =>
  import('./components/pages/Principal').then(m => ({ default: m.Principal }))
);
const Secretary = React.lazy(() =>
  import('./components/pages/Secretary').then(m => ({ default: m.Secretary }))
);
const OurDifference = React.lazy(() =>
  import('./components/pages/OurDifference').then(m => ({ default: m.OurDifference }))
);
const Facilities = React.lazy(() =>
  import('./components/pages/Facilities').then(m => ({ default: m.Facilities }))
);
const Achievements = React.lazy(() =>
  import('./components/pages/Achievements').then(m => ({ default: m.Achievements }))
);
const AdmissionsOverview = React.lazy(() =>
  import('./components/pages/admissions/Overview').then(m => ({ default: m.AdmissionsOverview }))
);
const Guidelines = React.lazy(() =>
  import('./components/pages/admissions/Guidelines').then(m => ({ default: m.Guidelines }))
);
const FeeAndAgeCriteria = React.lazy(() =>
  import('./components/pages/admissions/FeeAndAgeCriteria').then(m => ({ default: m.FeeAndAgeCriteria }))
);
const ApplyNow = React.lazy(() =>
  import('./components/pages/admissions/ApplyNow').then(m => ({ default: m.ApplyNow }))
);
const Curriculum = React.lazy(() =>
  import('./components/pages/academics/Curriculum').then(m => ({ default: m.Curriculum }))
);
const Faculty = React.lazy(() =>
  import('./components/pages/academics/Faculty').then(m => ({ default: m.Faculty }))
);
const CurrentOpenings = React.lazy(() =>
  import('./components/pages/careers/CurrentOpenings').then(m => ({ default: m.CurrentOpenings }))
);
const Inspire = React.lazy(() =>
  import('./components/pages/Inspire').then(m => ({ default: m.Inspire }))
);
const Empower = React.lazy(() =>
  import('./components/pages/Empower').then(m => ({ default: m.Empower }))
);
const Transform = React.lazy(() =>
  import('./components/pages/Transform').then(m => ({ default: m.Transform }))
);
const Achieve = React.lazy(() =>
  import('./components/pages/Achieve').then(m => ({ default: m.AchieveSection }))
);
const Gallery = React.lazy(() =>
  import('./components/pages/Gallery').then(m => ({ default: m.Gallery }))
);
const Contact = React.lazy(() =>
  import('./components/pages/Contact').then(m => ({ default: m.Contact }))
);
const MandatoryDisclosure = React.lazy(() =>
  import('./components/pages/MandatoryDisclosure').then(m => ({ default: m.MandatoryDisclosure }))
);
const Blog = React.lazy(() =>
  import('./components/pages/blog/Blog').then(m => ({ default: m.Blog }))
);
const CBSEResults2024 = React.lazy(() =>
  import('./components/pages/news/CBSEResults2024')
);
const CulturalFestival2024 = React.lazy(() =>
  import('./components/pages/events/CulturalFestival2024').then(m => ({ default: m.CulturalFestival2024 }))
);
const NetajiJayanti2025 = React.lazy(() =>
  import('./components/pages/blog/netaji-jayanti-2025').then(m => ({ default: m.NetajiJayanti2025 }))
);
const AdminDashboard = React.lazy(() =>
  import('./components/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard }))
);

// TypeScript interfaces
interface HomePageProps {
  onApplyNow: () => void;
}

interface PageWrapperProps {
  children: React.ReactNode;
  isPageTransitioning?: boolean;
}

// HomePage component
const HomePage: React.FC<HomePageProps> = ({ onApplyNow }) => (
  <>
    <HeroSlideshow />
    <InspireSection onApplyNow={onApplyNow} />
    <EmpowerSection onApplyNow={onApplyNow} />
    <TransformSection onApplyNow={onApplyNow} />
    <NewsEvents />
    <Schools />
  </>
);

// Protected Route Component
// const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
//   const { isAuthenticated, isAdmin, logout } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated || !isAdmin) {
//       navigate('/');
//     }
//   }, [isAuthenticated, isAdmin, navigate]);

//   if (!isAuthenticated || !isAdmin) {
//     return null;
//   }

//   return React.cloneElement(children, { onLogout: logout });
// };

export function App(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isPageTransitioning, setIsPageTransitioning] = useState<boolean>(false);

  usePerformanceMonitor();

  const handleNavigate = (path: string): void => {
    setIsPageTransitioning(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsPageTransitioning(false);
    }, 300);
  };

  // Page wrapper component with transitions
  const PageWrapper: React.FC<PageWrapperProps> = ({ children, isPageTransitioning }) => (
    <div className={`page-transition-enter${isPageTransitioning ? '' : ' page-transition-enter-active'}`}>
      {children}
    </div>
  );

  return (
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <div className="min-h-screen bg-white">
            <ScrollProgress />
            <Header
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              onNavigateHome={() => handleNavigate('/')}
              onApplyNow={() => handleNavigate('/apply')}
              onNavigate={handleNavigate}
            />
            <MenuOverlay
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              onNavigate={handleNavigate}
              onApplyNow={() => handleNavigate('/apply')}
            />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Home Route */}
                  <Route 
                    path="/" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <HomePage onApplyNow={() => handleNavigate('/apply')} />
                      </PageWrapper>
                    } 
                  />

                  {/* About Routes */}
                  <Route 
                    path="/overview" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Overview />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/vision" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Vision />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/chairman" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Chairman />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/director" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Director />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/principal" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Principal />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/secretary" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Secretary />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/difference" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <OurDifference />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/facilities" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Facilities />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/achievements" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Achievements />
                      </PageWrapper>
                    } 
                  />

                  {/* Admissions Routes */}
                  <Route 
                    path="/admissions-overview" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <AdmissionsOverview />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/guidelines" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Guidelines />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/fee" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <FeeAndAgeCriteria />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/apply" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <ApplyNow />
                      </PageWrapper>
                    } 
                  />

                  {/* Academics Routes */}
                  <Route 
                    path="/curriculum" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Curriculum />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/faculty" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Faculty onNavigate={handleNavigate} />
                      </PageWrapper>
                    } 
                  />

                  {/* Career Routes */}
                  <Route 
                    path="/openings" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <CurrentOpenings />
                      </PageWrapper>
                    } 
                  />

                  {/* Philosophy Routes */}
                  <Route 
                    path="/inspire" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Inspire onApplyNow={() => handleNavigate('/apply')} />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/empower" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Empower onApplyNow={() => handleNavigate('/apply')} />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/transform" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Transform onApplyNow={() => handleNavigate('/apply')} />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/achieve" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Achieve onApplyNow={() => handleNavigate('/apply')} />
                      </PageWrapper>
                    } 
                  />

                  {/* Other Routes */}
                  <Route 
                    path="/gallery" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Gallery />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/contact" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Contact />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/mandatory-disclosure" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <MandatoryDisclosure />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/blog/Blog" 
                    element={
                      <PageWrapper isPageTransitioning={isPageTransitioning}>
                        <Blog />
                      </PageWrapper>
                    } 
                  />

                  <Route 
                    path="/news/cbse-results-2024" 
                    element={
                       <PageWrapper isPageTransitioning={isPageTransitioning}>
                         <CBSEResults2024 />
                       </PageWrapper>
                     } 
                  />

                  <Route 
                    path="/events/cultural-festival-2024" 
                    element={
                        <PageWrapper isPageTransitioning={isPageTransitioning}>
                          <CulturalFestival2024 />
                         </PageWrapper>
                      } 
                  />

                  <Route 
                    path="/blog/netaji-jayanti-2025" 
                     element={
                        <PageWrapper isPageTransitioning={isPageTransitioning}>
                          <NetajiJayanti2025 />
                         </PageWrapper>
                       } 
                  />

                  {/* Admin Routes */}
                  <Route 
                    path="/admin/*" 
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    } 
                  />

                  {/* Infrastructure is an alias for facilities */}
                  <Route path="/infrastructure" element={<Navigate to="/facilities" replace />} />

                  {/* Catch all route - redirects to home */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </main>
            <Footer onNavigate={handleNavigate} />
            <BackToTop />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  );
}