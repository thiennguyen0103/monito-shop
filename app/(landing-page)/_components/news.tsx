import PetCard from "@/components/pet-card";
import Section from "@/components/section";
import { newestPetData } from "@/data/pet-data";

const News = () => {
  return (
    <Section
      label="What news?"
      title="Take A Look At Some Of Our Pets"
      viewMoreLink="/pets"
    >
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newestPetData.map((pet) => (
          <PetCard
            key={pet.id}
            imageUrl={pet.imageUrl}
            title={pet.name}
            age={pet.age}
            gender={pet.age}
            price={pet.price}
          />
        ))}
      </div>
    </Section>
  );
};

export default News;
