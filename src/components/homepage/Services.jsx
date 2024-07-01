import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Generative AI",
  ];

  const toolBoxItems = [
    "Python",
    "OpenCV",
    "PyTorch",
    "TensorFlow",
    "JavaScript"
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on data science, machine learning, and computer vision. With each of my
          services, my goal is to deliver impactful and innovative solutions."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go-to tech stack for making any projects happen. I am always eager to learn more about my current stack and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
