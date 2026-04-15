import TimeLineComponents from "./TimeLineComponents";
export const metadata = {
  title: "keen keeper - Timeline",
  description: "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
};
const timelinePage = () => {
  return (
    <section className="w-full max-w-[1280.1px] mx-auto px-5">
     <TimeLineComponents />
    </section>
  );
};

export default timelinePage;
