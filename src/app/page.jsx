import FriendsAll from "@/components/HomePage/FriendsAll/FriendsAll";
import Hero from "@/components/HomePage/Hero/Hero";


export default async function Home(){
  const mydata = await fetch(" http://localhost:3000/freands-data.json").then(res => res.json());

  return(
    <>
    <Hero />
    <FriendsAll className={`max-w-[1290.1px]`}/>
    </>
  )
}