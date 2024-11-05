import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
  </StrictMode>
)
