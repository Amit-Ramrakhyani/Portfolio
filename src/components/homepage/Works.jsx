import anpr from "/src/assets/images/vehicleTracking.webp";
import aithreatintelligence from "/src/assets/images/AIThreatIntelligence.webp";
import cspm from "/src/assets/images/CSPM.webp";
import emotion from "/src/assets/images/Emotion.webp";
import finance from "/src/assets/images/Finance.webp";
import buildify from "/src/assets/images/Buildify2.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/imabhisht/Devshouse-2024"
            img={buildify}
            alt="Buildify - No Code LLM App Builder"
            name="Buildify - No Code LLM App Builder"
            type="Generative AI • Language Model • Web Development"
            year="2024"
            tools="Python • LangChain • LlamaIndex • MongoDB • Flask • React"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://github.com/Amit-Ramrakhyani/VerbalLinguists"
            img={aithreatintelligence}
            alt="AI-Powered Threat Intelligence Platform"
            name="AI-Powered Threat Intelligence Platform"
            type="Generative AI • Backend Development • Data Pipelines"
            year="2025"
            tools="Python • LangChain • FastAPI • Qdrant • MongoDB"
          />
        </div>
        {/* <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://github.com/Amit-Ramrakhyani/Cloud-Security-Posture-Management"
            img={cspm}
            alt="cloud security posture management"
            name="Cloud Security Posture Management"
            type="Machine Learning • Data Analysis • Cloud Computing"
            year="2023"
            tools="Python • Tensorflow • LSTM • MongoDB • AWS"
          />
        </div> */}
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-40">
        <Projects
            link="https://github.com/Amit-Ramrakhyani/Personal-Finance-Monitoring-System"
            img={finance}
            alt="personal finance monitoring platform"
            name="Personal Finance Monitoring Platform"
            type="Data Analysis • Machine Learning • Web Development • App Development"
            year="2024"
            tools="Python • React • Java • MongoDB"
          />
        </div>
        {/* <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://github.com/Amit-Ramrakhyani/Emotion-Detection"
            img={emotion}
            alt="emotion detection system"
            name="Emotion Detection System"
            type="Computer Vision • Machine Learning • Deep Learning"
            year="2024"
            tools="Python • OpenCV • Tensorflow • Keras • CNN"
          />
        </div> */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/Amit-Ramrakhyani/License-Plate-Recognition"
            img={anpr}
            alt="Automatic License Plate Recognition System"
            name="Automatic License Plate Recognition System"
            type="Computer Vision • Machine Learning"
            year="2024"
            tools="Python • OpenCV • Tensorflow • Keras • YOLOv8 • Streamlit"
          />
        </div>
      </div>
    </section>
  );
}
