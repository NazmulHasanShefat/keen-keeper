import Link from "next/link";
export const metadata = {
  title: "Keen keeper - 404 Not found",
  description: "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
};
export default function NotFound() {
  return (
    <div className="h-screen flex-col w-full flex justify-center items-center">
      <h1 className="text-[30px] md:text-[48px] lg:text-[48px] font-bold">
        404 Page Not Found
      </h1>
      <Link
        href={"/"}
        className="py-2 rounded-xl hover:scale-105 transition-[scale] duration-200 cursor-pointer px-4 bg-green-700 text-white text-base"
      >
        Go to home page
      </Link>
    </div>
  );
}
