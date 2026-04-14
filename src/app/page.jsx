import FriendsAll from "@/components/HomePage/FriendsAll/FriendsAll";
import Hero from "@/components/HomePage/Hero/Hero";


export default async function Home(){
  return(
    <>
    <Hero />
    <FriendsAll className={`max-w-[1290.1px]`}/>
    </>
  )
}