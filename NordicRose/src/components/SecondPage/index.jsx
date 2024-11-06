import Nav from "../Nav/index.jsx";
import FooterNordicRose from "../FooterNordicRose/index.jsx";
import BlogPage from "../BlogPage/BlogPage.jsx";
import HeaderNews from "../HeaderNews/index.jsx";
import ImagesBlock from "../ImagesBlock/index.jsx";
import ImagesBlockLine from "../ImagesBlock_Line/index.jsx";
import AuthorInfo from "../AuthorInfo/index.jsx";
import SocialMedia from "../SocialMedia/index.jsx";
import TextSection from "../TextSection/index.jsx";
import TextAboutSite from "../TextAboutSite/index.jsx";
import ListSection from "../ListSection/index.jsx";
import ShareSection from "../ShareSection/index.jsx";
import TagsSection from "../TagsSection/index.jsx";
import TagsSecLine from "../TagsSecLine/index.jsx";
import ProfileSection from "../ProfileInfo/index.jsx";

function SecondPage() {
  return (
    <div>
      <Nav></Nav>
      <HeaderNews />
      <ImagesBlock />
      <ImagesBlockLine />
      <AuthorInfo />
      <SocialMedia />
      <TextSection />
      <TextAboutSite />
      <ListSection />
      <ShareSection />
      <SocialMedia />
      <TagsSection />
      <TagsSecLine />
      <ProfileSection />
      <BlogPage />
      <FooterNordicRose></FooterNordicRose>
    </div>
  );
}
export default SecondPage;
