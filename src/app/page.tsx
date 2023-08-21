import Banner from "@/components/Banner";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ margin: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <InfoCard />
      </div>
    </main>
  )
}
