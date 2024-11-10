export default function EmailForm() {
    return (
        <div className="w-[90%] max-[400px]:w-[100%] max-w-[500px] mx-auto my-10">
            <div className="h-2 bg-black w-full"></div>
            <div className="bg-white font-['San_Francisco'] border max-[400px]:border-x-0 border-black p-6 text-center">
                <h2 className="font-serif text-2xl mb-2 leading-none font-bold">Sign up for the newsletter</h2>
                <p className="text-sm font-medium font-['San_Francisco'] mb-5">
                    If you want relevant updates occasionally, sign up for the private
                    newsletter. Your email is never shared.
                </p>

                <div className="flex justify-center items-center">
                    <form className="flex w-[100%] justify-center items-center mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="flex-1 font-['San_Francisco'] min-w-[70px] px-2 py-2.5 border border-black text-sm text-black placeholder-black"
                        />
                        <button className="px-5 py-2.5 font-semibold bg-black text-white border border-black text-sm cursor-pointer font-medium uppercase whitespace-nowrap tracking-widest">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}