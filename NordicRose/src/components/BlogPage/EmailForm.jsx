export default function EmailForm() {
    return (
        <div className="font-sans w-[90%] max-w-[500px] mx-auto my-10">
            <div className="h-2 bg-black w-full my-4"></div>
            <div className="bg-white border border-black p-6 box-border text-center">
                <h2 className="font-serif text-2xl mb-4">Sign up for the newsletter</h2>
                <p className="text-sm leading-relaxed mb-5">
                    If you want relevant updates occasionally, sign up for the private
                    newsletter. Your email is never shared.
                </p>
                <form className="flex max-[400px]:flex-col gap-2 justify-center items-center mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 min-w-[70px] p-2.5 border border-gray-300 text-sm"
                    />
                    <button className="px-5 py-2.5 bg-black text-white border-none text-sm cursor-pointer font-bold uppercase whitespace-nowrap">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}