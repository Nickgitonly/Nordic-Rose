import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/index.jsx';
import Header from './components/Header/index.jsx';
import BlogPage from '@/components/BlogPage.jsx';
import './main.css';
import HeadSection from './HeadSection'
import HeaderNews from './HeaderNews'
import ImagesBlock from './ImagesBlock'
import AuthorInfo from './AuthorInfo'
import SocialMedia from './SocialMedia'
import TextSection from './TextSection'
import TextAboutSite from './TextAboutSite'
import ListSection from './ListSection'
import ShareSection from './ShareSection'
import TagsSection from './TagsSection'
import ProfileSection from './ProfileInfo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Nav />
      <Routes>
        <HeadSection />
    <HeaderNews />
    <ImagesBlock />
    <AuthorInfo />
    <SocialMedia />
    <TextSection />
    <TextAboutSite />
    <ListSection />
    <ShareSection />
    <SocialMedia />
    <TagsSection />
    <ProfileSection />
        <Route path="/" element={<Header />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);

