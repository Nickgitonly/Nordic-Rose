import React from 'react';

const articles = [
  {
    image: "src/assets/images/granny.jpg",
    title: "Granny gives everyone the finger, and other tips from OFFF Barcelona"
  },
  {
    image: "src/assets/images/hello-world.png",
    title: "Hello world, or, in other words, why this blog exists"
  },
  {
    image: "src/assets/images/pink-portrait.jpg",
    title: "Here are some things you should know regarding how we work"
  },
  {
    image: "src/assets/images/ghost.jpg",
    title: "A few words about this blog platform, Ghost, and how this site was made"
  },
  {
    image: "src/assets/images/work-topics.jpg",
    title: "Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better"
  },
  {
    image: "src/assets/images/cowboy.jpg",
    title: "How modern remote working tools get along with Old School Cowboy's methods"
  }
];

const BlogPage = () => {

  return (
    <div className="max-w-full overflow-x-hidden font-sans">
      <header className="text-center py-5 relative">
        <div className="relative w-full h-[1.5px] bg-black my-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-6 flex justify-start items-center">
            <div className="w-6 h-[30px] rounded-full border-2 border-black bg-white relative overflow-hidden">
              <div className="w-2 h-3 bg-black rounded-full absolute bottom-[3px] left-[40%]"></div>
            </div>
            <div className="w-6 h-[30px] rounded-full border-2 border-black bg-white relative overflow-hidden -ml-1">
              <div className="w-2 h-3 bg-black rounded-full absolute bottom-[3px] left-[35%]"></div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold my-8 font-serif">What to read next</h1>
      </header>

      <main className="w-[90%] max-w-[1180px] mx-auto px-5 box-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 p-4 max-w-[1920px] mx-auto">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col w-full h-full px-[5px] box-border">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-auto aspect-video object-cover"
              />
              <h2 className="font-medium text-[clamp(13px,1.5vw,16px)] mt-[10px] text-center tracking-wider leading-relaxed min-h-[60px] flex items-center justify-center">
                {article.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="font-sans w-[90%] max-w-[500px] mx-auto my-10">
          <div className="h-2 bg-black w-full my-4"></div>
          <div className="bg-white border border-black p-6 box-border text-center">
            <h2 className="font-serif text-2xl mb-4">Sign up for the newsletter</h2>
            <p className="text-sm leading-relaxed mb-5">
              If you want relevant updates occasionally, sign up for the private
              newsletter. Your email is never shared.
            </p>
            <form className="flex justify-center items-center mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-[200px] p-2.5 border border-gray-300 text-sm mr-2.5"
              />
              <button className="px-5 py-2.5 bg-black text-white border-none text-sm cursor-pointer font-bold uppercase whitespace-nowrap">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;