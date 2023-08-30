import Banner from "@/components/Banner";
import InfoCard from "@/components/InfoCard";


type hospital = {
  name: string;
  image: string;
}

const data: hospital[] = [
  {
    name: "Chulalongkorn University",
    image: "/img/chula.jpg"
  },
  {
    name: "Rajvithi Hospital",
    image: "/img/rajavithi.jpg"
  },
  {
    name: "Thammasat University",
    image: "/img/thammasat.jpg"
  }
]

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="my-20 mx-60 flex justify-center gap-20" >
        {
          data.map((item, index) => {
            return (
              <InfoCard key={index} name={item.name} image={item.image} />
            )
          })
        }
      </div>
    </main>
  )
}
