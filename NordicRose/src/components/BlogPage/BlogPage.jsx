import EmailForm from './EmailForm';

const articles = [
  {
    image: "/images/granny.jpg",
    title: "Granny gives everyone the finger, and other tips from OFFF Barcelona"
  },
  {
    image: "/images/hello-world.png",
    title: "Hello world, or, in other words, why this blog exists"
  },
  {
    image: "/images/pink-portrait.jpg",
    title: "Here are some things you should know regarding how we work"
  },
  {
    image: "/images/ghost.jpg",
    title: "A few words about this blog platform, Ghost, and how this site was made"
  },
  {
    image: "/images/work-topics.jpg",
    title: "Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better"
  },
  {
    image: "/images/cowboy.jpg",
    title: "How modern remote working tools get along with Old School Cowboy's methods"
  }
];

function Eye({ pupilLeft, mLeft }) {
  return (
    <div className={`w-16 h-[35px] rounded-[50%] border-[1.4px] border-black bg-white relative overflow-hidden ${mLeft}`}> { /* -ml-1 */}
      <div className={`w-[0.6rem] h-3.5 bg-black rounded-[50%] absolute bottom-[2px] ${pupilLeft}`}></div>
    </div>
  );
}
const BlogPage = () => {
  return (
    <div className="max-w-full overflow-x-hidden font-sans">
      <header className="text-center relative mb-3">
        <div className="relative w-full h-[1.5px] bg-black mt-6 mb-12">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-6 flex justify-start items-center">
            <Eye pupilLeft="left-[40%]" />
            <Eye mLeft="-ml-1" pupilLeft="left-[40%]" />
          </div>
        </div>

        <h1 className="text-3xl font-bold font-serif">What to read next</h1>
      </header>

      <main className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 p-4 max-w-[1920px] mx-auto justify-items-center">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col w-full h-full px-[5px] box-border items-center">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto aspect-video object-cover"
              />
              <h2 className="font-bold text-base leading-tight font-['San_Francisco'] mt-[10px] text-center min-h-[60px] flex items-center justify-center">
                {article.title}
              </h2>
            </div>
          ))}
        </div>

        <EmailForm />
      </main>
    </div>
  );
};

export default BlogPage;